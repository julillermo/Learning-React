import { useEffect, useState } from "react";
import { appRoot, rootTheme } from "./App.css";

import { PageArea } from "./components/PageArea";
import { Sidebar } from "./components/Sidebar";
import { navItems, pagesIndex } from "./pagesIndex";
import type { PageKey } from "./types/sidebar";
import type { ThemeMode } from "./types/theme";

function App() {
  const [active, setActive] = useState<PageKey>("home");
  const [theme, setTheme] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    return setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const handleHeaderClick = () => {
    return window.open("https://react.dev/learn", "_blank");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={`${appRoot} ${rootTheme[theme]}`}>
      <Sidebar
        items={navItems}
        activeKey={active}
        onPageChange={setActive}
        theme={theme}
        onToggleTheme={toggleTheme}
        onHeaderClick={handleHeaderClick}
      />
      <PageArea pages={pagesIndex} active={active} theme={theme} />
    </div>
  );
}

export default App;
