# Responding to Events

## Event propagation

- If your parent compnent and child component have a similar even (e.g. `onClick`), triggering the child's event would likely trigger the parent's event.
- Use `e.stopPropagation()` to prevent "bubbling up"
- The documentation mentioned `onClickCapture`, but didn't discuss in detail.

## Preventing default behavior

- use `e.preventDefault()` to for this use case.

# State: A Component's Memory

- If the value of a variable is needed for rendering, store it using `useState()`.
  - These persist across rerenders.
  - Updating a state value triggers a rerender.
- Typically, place your hooks at the very start of your React component.
- The documentation provides a [detailed article discussing the logic behind how hooks work](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
  - A quick explanation is also provided within the documentation itself. This shows an example function using pure JavaScript to achieve the same thing as a `useState`
- Each instance of a component has it's own internal state that's independent of other (same) component instances

# Render and Commit

- "React only changes the DOM nodes if there's a difference bewteen renders."
  - I believe this si partly why you have to specify a `key` property for lists--to emphasize that the components have changed.

# State as a Snapshot

- Updating state triggers a rerender.
- Calling a setter function (for a react state value) multiple times in a single function only commits the latest set state call ON NEXT RENDER.
- The update to the state value only gets commited after the ON NEXT render. If you change the state value (not yet commited), and also read from it, your reading will present the "old" value

# Queueing a Series of State Updates

- If you want to update the state multiple times within w rerender phase, you must pass a function to the setter, e.g. `setNumber (n => n + 1)`. Calling this 3 times will successfuly increase the state value +3 on next rerender.

# Updating Object in State

- When using a JS object as a state in a React component, it'd be better to pass a copy of the original compoent with your modifications. Don't mutate the JS object directly.
  - Don't do something like this `position.x = 5` to a state.
  - Instead update the value with something like `setPosition(prev => {...prev, x: 5})`
- Technically, you're still free to mutation an object you declared within a React component as long as it's not a state value.
- Technically, objects aren't really nested. the sub-object is treated as a separate object attached to an object's property.
- The following way on how the [documentation used the `name` html attribute to dynamically assign values](https://react.dev/learn/updating-objects-in-state#copying-objects-with-the-spread-syntax) is quite interesting:

```js
// App.js
// Using a single event handler for multiple fields
import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
```

# Updating Arrays in State

- You must update an array without mutation. Similar to objects, you must use the spread syntax to create a copy.
- Avoid using functions that alter the original list.
- Generally speaking, use `.map()` an `.filter()` when working with arrays in react, especially if they're states.
- the documentation provides some good starting points on how to handle lists in a functiona way.

## Prefer non-mutating array helpers

|               | avoid (mutates the array)           | prefer (returns a new array)                 |
| ------------- | ----------------------------------- | -------------------------------------------- |
| **sorting**   | `push`, `unshift`                   | `concat`, `[...arr]` spread syntax (example) |
| **removing**  | `pop`, `shift`, `splice`            | `filter`, `slice` (example)                  |
| **replacing** | `splice`, `arr[i] = ...` assignment | `map` (example)                              |
| **sorting**   | `reverse`, `sort`                   | copy the array first (example)               |
