export default function Home() {
  return (
    <section>
      <h1>React Playground</h1>
      <p>
        Use the sidebar to jump between isolated demos that showcase the hooks,
        async, and state-management patterns the app currently exposes.
      </p>
      <h2>Available pages</h2>
      <ul>
        <li>
          <strong>Hooks Playground:</strong> Try controlled inputs, refs, and the
          basic hooks (`useState`, `useEffect`, `useRef`).
        </li>
        <li>
          <strong>Fetch / Effect Demo:</strong> Explore a fetch-driven effect and
          how async states are managed in React.
        </li>
        <li>
          <strong>Reducer Demo:</strong> Walk through `useReducer` with a list
          reducer that shows a familiar reducer-loop flow.
        </li>
        <li>
          <strong>Context Demo:</strong> Inspect how a provider + consumer pair
          shares state across the tree without prop drilling.
        </li>
      </ul>
    </section>
  );
}
