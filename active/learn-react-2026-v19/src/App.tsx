import { useEffect, useState } from "react";
import { appRoot, rootTheme } from "./App.css";

import { PageArea } from "./components/PageArea";
import { Sidebar } from "./components/Sidebar";
import { FetchDemo } from "./pages/FetchDemo";
import Home from "./pages/Home";
import { HooksPlayground } from "./pages/HooksPlayground";
import type { Page, PageKey } from "./types/sidebar";
import type { ThemeMode } from "./types/theme";

const pages: Page[] = [
  { id: "home", label: "Home", component: <Home /> },
  { id: "hooks", label: "Hooks Playground", component: <HooksPlayground /> },
  { id: "fetch", label: "Fetch / Effect Demo", component: <FetchDemo /> },
];

function App() {
  const [active, setActive] = useState<PageKey>("home");
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    return setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${appRoot} ${rootTheme[theme]}`}>
      <Sidebar
        pages={pages}
        active={active}
        onChange={setActive}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <PageArea pages={pages} active={active} theme={theme} />
    </div>
  );
}

export default App;
