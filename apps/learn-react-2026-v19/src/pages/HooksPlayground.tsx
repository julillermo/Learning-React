import { useEffect, useRef, useState } from "react";

export function HooksPlayground() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const mountedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      // defer setMounted to avoid synchronous setState in effect
      const t = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(t);
    }
    const id = setTimeout(() => {
      // effect that runs when text changes after a debounce
    }, 300);
    return () => clearTimeout(id);
  }, [text]);

  return (
    <section>
      <h1>Hooks Playground</h1>
      <div style={{ display: "grid", gap: 12 }}>
        <div>
          <button onClick={() => setCount((c) => c + 1)}>Increase</button>
          <span style={{ marginLeft: 8 }}>count: {count}</span>
        </div>

        <div>
          <label>
            Type:{" "}
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <p style={{ color: "#888" }}>You typed: {text || <em>(empty)</em>}</p>
        </div>

        <div>
          <p>Mounted: {mounted ? "yes" : "no"}</p>
        </div>
      </div>
    </section>
  );
}
