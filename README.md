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
