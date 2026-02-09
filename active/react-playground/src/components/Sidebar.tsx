import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { type ReactNode } from "react";
import reactLogo from "../assets/react.svg";
import type { Page, PageKey } from "../types/sidebar";
import { type ThemeMode } from "../types/theme";
import * as styles from "./Sidebar.css";

type SidebarProps = {
  pages: Page[];
  active: PageKey;
  onPageChange: (page: PageKey) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onHeaderClick?: () => void;
};
export function Sidebar({
  pages,
  active,
  onPageChange,
  theme,
  onToggleTheme,
  onHeaderClick,
}: SidebarProps): ReactNode {
  return (
    <aside className={`${styles.sidebar} ${styles.sidebarTheme[theme]}`}>
      <h2
        className={styles.title}
        onClick={onHeaderClick}
        style={assignInlineVars({
          [styles.onHeaderClickVar]: onHeaderClick ? "pointer" : "default",
        })}
      >
        <img className={styles.logo} src={reactLogo} alt="React logo" />
        <p>React Playground</p>v{React.version}
      </h2>
      <p className={styles.hint}>
        Switch between isolated demos without routing.
      </p>
      <nav className={styles.nav}>
        {pages.map((p) => (
          <button
            key={p.id}
            type="button"
            className={[
              styles.navButton,
              styles.navButtonTheme[theme],
              p.id === active ? styles.navButtonActive : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onPageChange(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>
      <div className={styles.themeToggle}>
        <span>{`${theme === "light" ? "Light" : "Dark"} Mode`}</span>
        <button
          type="button"
          className={styles.themeToggleButton}
          onClick={onToggleTheme}
        >
          Toggle
        </button>
      </div>
    </aside>
  );
}
