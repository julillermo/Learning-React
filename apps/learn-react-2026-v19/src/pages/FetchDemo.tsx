import { useEffect, useState } from "react";

type Todo = { id: number; title: string; completed: boolean };

export function FetchDemo() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    // defer the loading state update to avoid synchronous setState in effect
    const start = setTimeout(() => setLoading(true), 0);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setTodos(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(String(err));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
      clearTimeout(start);
    };
  }, []);

  return (
    <section>
      <h1>Fetch / Effect Demo</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "salmon" }}>{error}</p>}
      {todos && (
        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <label>
                <input type="checkbox" checked={t.completed} readOnly />{" "}
                {t.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
