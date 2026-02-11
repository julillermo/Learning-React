# Reacting to Input with State

- Remove non-essential state variables
  - look out for overlapping or contradictoy scenarios.
  - It's also possible to derive values from an existing state, so you woudn't to ddecalre another one.
- The documentation is already suggesting the use of a `reducer` to help organize states

## Delcarative UI vs Imperative UI

- React is a Declarative UI framework. This means that you give the final outcome, and React should be act as a middle-man and figure its way to arrive there.
  - In most cases, you don't need to reach of the bare web APIs unlike how you would for plain HTML + JS.
- Imperative UI is how traditional HTML + JS websites work wher you explicitly have to describe each step of the way to arrive at the destination.

# Choosing the State Structure

## Principles for structuring state

1. Group related state
   - `const [position, setPositoin] = useState({ x:0, y: 0})`
2. Avoid contracitions in state
   - chose `const [status, setStatus] = useState('typing')` over having separate state for `isSent` and `isSending`
3. Avoid redundant state
   - If possible, maybe you can derive the value from existing state instead of setting the value as a state itself. (e.g. derive the `fullName` from the `firstName` and `lastName` state)
4. Avoid duplication in state
   - When you have a state for all possible items, and you have another state for the currently selected item, it would be best to only store the index of the selected item, so you're not duplicate the contents themselves
5. Avoid deeply nested state. (referring to objects & lists)

# Sharing State Between Components

- Lift up the responsibility for a state to a common parent component, if you want the state to be shared by child components. Pass the value of the state as a prop to the children.

# Preserving and Resetting State

- The value of a state will persist as long as the component is part of the render tree.
  - Hiding a component with CSS should persis the state
  - Conditionally rendering a component would clear the state when the component gets removed from the render tree
- Two ways to reset state at the same position (for same/reused component)
  1. Rendering a component in different positions
     - use separate `&&` operators instead of `? :` for both components
  2. Specify a key for each component (doesn't have to be a list)

## Pitfall

- "... it's the position in the UI tree--not in the JSX markup--that matters to React!"
  - The above is assuming that the component that takes over the same position is structured similarly (i.e. a component with 2 child components instead a fragment is different from a component with only 1 of those 2 child components). I think this my be a shortcut React uses to decrease computation cost?

## Preserving state fr non-rendered components

- Hide only with CSS. Can become slow when the component is very large
- Lift the state up, so the state persists
- Use `localStorage`

# Extracting State Logic into a Reducer

- The base example on when to use a reducer is for when you have a lot of utility-type functions that alter state variables. Each utility function calls the same setter function to modify the same state.
- "Reducers are a different way to handle state. You can migrate from `useState` to `useReducer` in three steps:
  1. **Move** from setting state to dispatching actions.
  2. **Write** a reducer function.
  3. **Use** the reducer from your component.
- "Manageing state with reducers is slightly different from directly setting state. Instead of telling React 'what to do' by setting state, you specify 'what the user just did' ..." ex.
  - `handleAddTask(text)` -> when user presses "add"
  - `handleChangeTask(task)` -> when user toggles
  - `handleDeleteTask(taskId)` -> when user presses "delete"

## Comparing `useState` and `useReducer`

- `useState` is generally quicker implement whereas `useReducer` requires more thought. I'm thinking you'll only implement `userReducer` once the base flow of your application has already been established; using `userReducer` hence acts like a clean up step?
- `useState`'s are more readable for simple interactions.
- The `useReducer` is easier to debug. "... you can add a console log into your reducer to see every state upddate, and _why_ it happened (due to which `action`). Is harder to track down what caused a state change with `useState`.
- The `useReducer` can be tested in isolation / is a pure function.
- Generally speaking, `useState` and `useReducer` are equivalent

# Passing Data Deeply with Context

- "Prop drilling" happens when props keep getting passed down repeatedly down the render tree. This leads to verbosity.
- Using **Context** allows information to be accessible to any component below it in the render tree. Information is accessble to distant children.
  - **Context** is a direct alternative to "prop drilling" in the same way that `useReducer` is equivalent to using the setter function from `useState`.
  - If you want the value to change for a specific distant child component, you have to wrap it with the context component and set a new value.
- Example:
  - You have a wrapper component where it would be convenient to only pass the proper to the wrapper component insteadd of each and every child component below it.
- Try not to overuse contexts:
  - Generally stick to passing props directly
  - Alternatively you can also pass in children that already have the value specified as props for them.
- Use cases for context:
  - **Theming**
  - **Current account**
    - parts of the code may need to know information about the logged in user.
  - **Routing**
    - "Most routing solutions use context internally to hold the current route"

# Scaling up with Reducer and Context

- Essentially, if you have a state that's managed by a `useReducer()`, you can pass down the propes using `useContext()` and a wrapping component.
  1. **Create** the context
  2. **Put** state and dispatch into context (separately, though I think they can be together?)
  3. **Use** context anywhere in the tree.
- You can take this further by isolating the `useReducer()` and `useContext()` logic into a single file. You can even turn them into a **Custom hook**
