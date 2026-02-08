import { type ReactNode } from "react";
import reactLogo from "../assets/react.svg";
import type { Page, PageKey } from "../types/sidebar";
import { type ThemeMode } from "../types/theme";

type SidebarProps = {
  pages: Page[];
  active: PageKey;
  onChange: (page: PageKey) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
};
export function Sidebar({
  pages,
  active,
  onChange,
  theme,
  onToggleTheme,
}: SidebarProps): ReactNode {
  return (
    <aside className="sidebar">
      <h2>
        <img src={reactLogo} />
        React Playground
      </h2>
      <p className="hint">Switch between isolated demos without routing.</p>
      <nav>
        {pages.map((p) => (
          <button
            key={p.id}
            className={p.id === active ? "active" : undefined}
            onClick={() => onChange(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>
      <div className="theme-toggle">
        <span>{`${theme === "light" ? "Light" : "Dark"} Mode`}</span>
        <button type="button" onClick={onToggleTheme}>
          Toggle
        </button>
      </div>
    </aside>
  );
}
