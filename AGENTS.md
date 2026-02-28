# 🕶️ AGENT-SMITH-MD v2

## General Reminders

- Feel free to tweak the `AGENTS.md` files the next time you hit a blocker—modify/delete as needed to unblock future requests.
- When working in a monorepo/workspace, feel free to create an app/project-specific `AGENTS.md` file to add granularity of control for specific apps/projects.

## Recommended Actions

### Navigation

- When the current file or project is dominantly JavaScript/TypeScript (`.js`, `.ts`, `.jsx`, `tsx`), leverage the type inference to more easily navigate the project. Use type inference to identify where functions and variables are declared and where they're used.

### Generating single-use scripts

- Prefer to use **Bash** or **JavaScript** when generating scripts. When using a **JavaScript** script, run it via the **Node** version accessible from the project. If you must use **Python**, use the `python3` command.

### Code Review

- Alert for typo-errors and unnecessary debugging logs.
- Verify consistency of types and logic flow throughout logic sequences

## Discouraged Actions

### Generating single-use scripts

- Avoid using third-party packages for single-use scripts.

## Actions to Strictly Never Perform

### Git

- Never commit a code change
- Never switch the active branch. Agents are provided a dedicated git worktree.
- Do not perform `git push`, `git merge`, `git rebase`.

### Deployment

- Never run deployment commands
