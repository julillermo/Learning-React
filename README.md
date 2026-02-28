# Learning-React

A repository where I can freely test out React features, separate from any other project. This repository has also become my testing ground for trying out agentic coding.

```
├─ active/
│  └─ react-playground/         # Current Vite + React 19 + TypeScript playground (pnpm app)
├─ archive/
│  ├─ learn-react-2024-v18/      # First walkthrough of react.dev/learn/
│  └─ TicTacToe/                 # Early trial project following the 2024 runthrough
└─ (root config)                 # pnpm workspace ties the active app and archives together
```

## Workspace

- `pnpm --filter=react-playground dev` → start the Vite dev server inside `active/react-playground`.
- `pnpm --filter=react-playground build` → run the bundled build + `tsc -b` for the playground app.
- `pnpm --filter=react-playground lint` → run ESLint on the playground sources.

## Things mentioned in the [State of React 2025 survey]([https://2025.stateofjs.com/en-US/](https://2025.stateofreact.com/en-US/)) that I'm interested in trying out

- **Features**
  - `<Suspense>` ([docs link](https://react.dev/reference/react/Suspense))
  - `lazy` ([docs link](https://react.dev/reference/react/lazy))
  - `useLayoutEffect` ([docs link](https://react.dev/reference/react/lazy))
  - server functions ([docs link](https://react.dev/reference/rsc/server-functions))
  - `startTransition` ([docs link](https://react.dev/reference/react/startTransition))
  - `useDeferredValue` ([docs link](https://react.dev/reference/react/useDeferredValue))
  - `useActionState` formerly `useFormState` ([docs link](https://react.dev/reference/react/useActionState))
  - `useFormStatus` ([docs link](https://react.dev/reference/react-dom/hooks/useFormStatus))
  - `useOptimistic` ([docs link](https://react.dev/reference/react/useOptimistic))
  - `useEffectEvent` ([docs link](https://react.dev/reference/react/useEffectEvent))
  - `<ViewTransition>` ([docs link](https://react.dev/reference/react/ViewTransition))
  - `<Activity>` ([docs link](https://react.dev/reference/react/Activity))
- **Libraries**
  - **UI Libraries**
    - Motion (Framer Motion)
    - React-Spring
    - Chart.js
    - Recharts
    - TanStack Form
  - **State Management**
    - Zustand
    - Jotai
  - **Data Loading**
    - Tanstack Query
    - Axios 
