import { useEffect, useState, type JSX } from "react";
import "./App.css";

import { FetchDemo } from "./pages/FetchDemo";
import Home from "./pages/Home";
import { HooksPlayground } from "./pages/HooksPlayground";

type PageKey = "home" | "hooks" | "fetch";
type ThemeMode = "light" | "dark";

const pages: { key: PageKey; label: string; component: JSX.Element }[] = [
  { key: "home", label: "Home", component: <Home /> },
  { key: "hooks", label: "Hooks Playground", component: <HooksPlayground /> },
  { key: "fetch", label: "Fetch / Effect Demo", component: <FetchDemo /> },
];

const Sidebar = ({
  active,
  onChange,
  theme,
  onToggleTheme,
}: {
  active: PageKey;
  onChange: (page: PageKey) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}) => (
  <aside className="sidebar">
    <h2>Playground</h2>
    <nav>
      {pages.map((p) => (
        <button
          key={p.key}
          className={p.key === active ? "active" : undefined}
          onClick={() => onChange(p.key)}
        >
          {p.label}
        </button>
      ))}
    </nav>
    <p className="hint">Switch between isolated demos without routing.</p>
    <div className="theme-toggle">
      <span>{theme === "light" ? "Light" : "Dark"} mode</span>
      <button type="button" onClick={onToggleTheme}>
        Toggle
      </button>
    </div>
  </aside>
);

const PageArea = ({ active }: { active: PageKey }) => (
  <main className="page-area">
    {pages.find((p) => p.key === active)?.component}
  </main>
);

function App() {
  const [active, setActive] = useState<PageKey>("home");
  const [theme, setTheme] = useState<ThemeMode>("light");
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div className={`app-root ${theme}`}>
      <Sidebar
        active={active}
        onChange={setActive}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <PageArea active={active} />
    </div>
  );
}

export default App;
