import { useState } from "react";
import { appRoot, rootTheme } from "./App.css";

import { PageArea } from "./components/PageArea";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { useTheme } from "./hooks/theme";
import { navItems, pagesIndex } from "./pagesIndex";
import type { PageKey } from "./types/sidebar";

function AppMain() {
  const [active, setActive] = useState<PageKey>("home");
  const { theme } = useTheme();

  const handleHeaderClick = () =>
    window.open("https://react.dev/learn", "_blank");

  return (
    <div className={`${appRoot} ${rootTheme[theme]}`}>
      <Sidebar
        items={navItems}
        activeKey={active}
        onPageChange={setActive}
        onHeaderClick={handleHeaderClick}
      />
      <PageArea pages={pagesIndex} active={active} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppMain />
    </ThemeProvider>
  );
}

export default App;
