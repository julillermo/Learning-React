# Introduction

- New built-time tool to automatically optimize React applications.
- React is typically fast enough for most use cases. When more performance is needed, you can optimize using memoization through built-in React features like `memo`, `useMemo` or `useCallback`
  - Note that `memo` is for wrapping compoinents while `useMemo` is for memoizing values.
  - Interestingly, in pre-compiler React, passing a function as a anonymous function `() => useCallbackWrappedHandler(item)` inline as props breaks memoization.
- React compiler automatically does the optimization for you, so no need to add the above React functions anymore. Code that still calls those functions should still work.
- What React compiler improves:
  - Skip cascading re-rendering of components
  - Skip expensive calculations from outside of React
- Caveats:
  - React compiler only covers React components and hooks
  - React compiler's memoization is not shared accross components or hooks.
  - You may want to memoize outside of React for very expensive calculations

## Should I try out the compiler?

- "... still an optional addition to React today, in the future some features may require the comiler in order to fully work."

## What build tools are supported?

- "... can be installed across several build tools such as Babel, Vite, Metro, and Rsbuild.
- "While the initial stable version of the compiler will remain primarily a Babel plugin, we are working with the swc and oxc teams to build first class support for React Compiler so you won't have to add Babel back to your build pipelinesin the future."
  - "Next.js users can enable the swc-invoked React Compiler by using v15.3.1 and up

## What should I do about `useMemo`, `useCallback`, and `React.memo`?

- "The `useMemo` and `useCallback` hooks can continue to be used with React Compiler as an escape hatch to provide control over which values are memoized \[to force it where needed, I guess].

# Installation

- The vite starter template I used for this react-playground project appears to already include the `babel-plugin-react-compiler` package. This also covers the ESLint Integration setup

## Basic Setup

- React compiler should work by default. For React versions below 19, refer to the [compiler options reference](https://react.dev/reference/react-compiler/configuration)
- For more details on the setup directly refer to [the documentation](https://react.dev/learn/react-compiler/installation).

### Babel

- add `'babel-plugin-react-compiler'` as the very first value of the puglins array of the `babel.config.js` file.

### Vite

- add `'babel-plugin-react-compiler'` as part of the babel plugins under react inside of the `vite.config.js` file.

### Nextjs

- refer to [their own documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler)

### React Router

- add to the babel plugins in `vite.config.js`

### Others

- Webpack
- Expo
- Metro (React Native)
- Rspack
- Rsbuild

## Verify Your Setup

- Install the [React Developer Tools](https://react.dev/learn/react-developer-tools) extension. In the components tab, you should see the ✨ emoji beside component names

# Incremental Adoption

- "Incremental adoption makes it easier to address any Rules of React violates the compiler might find. ... By controlling which parts of your code get compiled, you can also run A/B tests to measure the real-world impact of the compiler's optimizations.

## Directory-Based Adoption with Babel Overrides

- The documentation only describes how to do this with `babel.config.js`. I'm guessing I'd have to search for individual frameworks on whether and how they support incremental adoption.

## Opt-in Mode with `"use memo"`

- Still modifying `babel.config.js`. Afterwards, you can apply `"use memo"` at the start of (still inside) a function.
