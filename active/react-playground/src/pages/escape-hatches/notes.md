# Referencies Values with Refs

- Via the `useRef()` hook, and values are accessible via `ref.current`
- These values are intentially mutable, so you can assign values directly to them (e.g. `ref.current = someNewValue`)
- Unlike state values from `useState()`, updating ref values don't trigger a rerender. Use a state value if you'll be using it as part of the rerender

# Manipulating the DOM with Refs

- Attach the name of the `ref` you created to an element like so: `<div ref={someRef}>`
- You can acces native DOM APIs via your `someRef` such as `someRef.current.scrollIntoView()`
- I think this is useful when creating your own UI library?
- I think you only really use `ref` to hook into a native HTML element. For React components, `ref`'s get passed like regular props.
- "In general, youi don't want to acces refs during rendering."
  - "React sets `ref.current` during the commit \[to the DOM change, which is the step after React figures out what to change]".
- React typically queues state updates via the setter functoins, but you can force a state change to commit synchrnously (immediately) using the `flushSync` function from `react-dom`

# Synchronizing with Effects

- In a way, effects are kind of like event handlers, but are specific to certain values changing.
- Typically, the intention for an effect is to _synchronize with some external system_, so, if you're only using it to manipulate state, you might not need an effect.
- Like `useRef`, use it only as a "way out" of React's purity
- **How to write an effect**
  1. **Declare an Effect**
     - use `[]` to only run an effect on load.
  2. **Specify the Effect dependencies**
  3. **Add cleanup if needed**
- If you're effect is firing twice in development, you'll likely in need of a cleanup function.
- Some use cases for effects
  - **Controlling non-React widgets**
  - **Subscribing to events** (e.g. `window.addEventListener('scroll', handleScrol)`)
  - **Triggering animations** (e.g. `node.style.opacity = 0`)
  - **Fetching data**
  - **Sending analytics**

# You Might Not Need an Effect

- Reasons to NOT use an effect:
  - **Updating state basedon props or state**
  - **Caching expensive calculations**
  - **Resetting all state when a prop changes**
  - **Adjusting some state when a prop changes**
  - **Sharing logic between event handlers**
  - **Sending a POST request**
  - **Initializing the application**
  - **Notifying parent components about state changes**
  - **Passing data to a parent**
  - **Subscribing to an external store**
  - **Fetching data**

# Lifecycle of Reactive Effects

- An Effect can only do two things:
  - to start synchronizing someting, and
  - later to top synchronizing.
- Think of the effect lifecycle as separate from that of the components
- If you dont' pass a cleanup function, React assums you returned an empty cleanup function.
  - You typically want a cleanup function as Effects are, again, primarily for connecting and disconnecting.
  - If you didn't have a cleanup function, the original connection would likely have persisted when you're about to create the next connection.
- **Each Effect represents a separate synchronization process**. "Resist adding unrelated logic to your Effect only because this logic needs to run at the same time as an Effect you already wrote. ... Each Effect in your code shoul represent a separate and independent synchronization proces."
- **You can't "choose" your dependencies**, the linter will suggest that you indicate all reactive values used within your `useEffect`
  - "If your Effect doesn't synchronize anything, it might be unnecessary. If it synchronizes several independent things, split it up

# Separating Events from Effects

- **Event handlers run in response to specific interactions** (_manually triggered_, in a way)
  - **Logic inside event handlers is not reactive**
- **Effects run whenever synchronization is needed**
  - **Logic insie Effects is reactive**

# Removing Effect Dependencies

- I skipped this

# Reusing Logic with Custom Hook

- **Custom Hooks let you share stateful logic, not state itself**
  - Similar to how each instance of the same component would have its own state.
- "The code inside your custom Hooks will re-run during every re-render of your component. This is why, like compnents, custom Hooks need to be pure."
- Like components, you can also pass props and functions into a custom hook.
- **When to use custom Hooks**
  - You can honestly leave the code duplicated, and it would work just fine. However, naming that sequence of repeated logic makes the intention clearer when revisiting
