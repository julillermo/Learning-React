# Your First Component

## Pitfalls

- React components start with a capital letter
- Don't nest declaration of React components (slow & can cause bugs)

# Import and exporting components

- Default vs named exports

# Writing Markup with JSX

- Children components must be wrapped in a JSX / React fragment
- All tags must be closed. Originally HTML allows just `<img>` instead of `<img/>`
- Attribtes are usually camelCase

# JavaScript in JSX with Curly Braces

- Use `{}` to access JavaScript variables inside of markup. This works for both children and as values of attributes
- Use `{{}}` to pass an object.
  - When passing a style object, maintain the camelCase for the css properties

# Passing Props to a Component

- React components are essentially like JavaScript functions. React components specifically uses an object as an argument (these are the propes), and you specify the function arguments.
- I believe `children` and `className` are reserved words.
  - `children` represents the ReactNode that your component would surround
  - `className` is equivalent to a `css` property when using the component. (e.g. `<SomeComponent css={{...style-object...}}>)

# Conditional Rendering

- React recommends using conditional operators like `??`, `&&`, and `? :`.

# Rendering Lists

- React recommends using the `.filter()` and `.map()` JavaScript methods.
  - When using `.map()` make sure to assign a `key` property.
    - keys must be unique amongst siblings.
    - I believe not having unique keys causes rendering issues.

# Keeping Components Pure

- "Pure functions only perform a calculation and nothing more."
  - Doesn't change any objects are variables before it was called
  - When given the same inputs, the same output is guaranteed
- "React assumes that every component you write is a pure function."
  - Should render the same outcome of components when given the same input

# Side Effects (un)intended consequences

- Try not to access nor modify javascript variables not declared in a component.
  - If variable is passed into a component, used the data in a non-destructive way.
- Because of the rerenders that React does, if you modify a variable outside of a function, this modification will be repeate, leading to unexpected results.
- Local mutation (mutating variables declared within a React component) is completely fine.

## Detecting impure calculations with `StrictMode`

- I believe most modern setups using React (`Vite` and `Next.js`) likely use `StrictMode` by default.
  - `StrictMode` is related to why React renders twice. The repeated rendering helps find out impure code/renders.
- React's 3 inputs: `props`, `state`, and `context` must e treated as read-only in how you write your component.

## Where you _can_ cause side effects

- Event handlers usually fire outside of rendering, so they odn't need to be pure.
- The documentation makes recommends first trying out event handlers before reaching for a `useEffect`

# Your UI as a Tree

- Note that althought the React tree is a lot like HTML, it is actually platform agnostic. From what I understands if only maps to the equivalent HTML; this is also why React can be used to hook into native APIs as in React-Native.
- "When building a React app for production, there is tpyically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is calle a bundler, an bundlers will use the dependency tree to determine what modules shoul be included."
