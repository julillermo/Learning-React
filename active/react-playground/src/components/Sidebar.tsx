import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { type ReactNode } from "react";
import reactLogo from "../assets/react.svg";
import { useTheme } from "../hooks/theme";
import { pagesIndex } from "../pagesIndex";
import type { NavItem, PageKey } from "../types/sidebar";
import { Dropdown } from "./Dropdown";
import * as styles from "./Sidebar.css";

type SidebarProps = {
  items: NavItem[];
  activeKey: PageKey;
  onPageChange: (page: PageKey) => void;
  onHeaderClick?: () => void;
};
export function Sidebar({
  items,
  activeKey,
  onPageChange,
  onHeaderClick,
}: SidebarProps): ReactNode {
  const { theme } = useTheme();

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
        {items.map((item) => {
          switch (item.kind) {
            case "page":
              return (
                <button
                  key={item.id}
                  type="button"
                  className={[
                    styles.navButton,
                    styles.navButtonTheme[theme],
                    item.id === activeKey ? styles.navButtonActive : undefined,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => onPageChange(item.pageKeys[0])}
                >
                  {item.label}
                </button>
              );
            case "dropdown":
              return (
                <Dropdown label={item.label}>
                  {item.pageKeys.map((pageKey) => (
                    <button
                      key={pageKey}
                      type="button"
                      className={[
                        styles.navButton,
                        styles.navButtonTheme[theme],
                        pageKey === activeKey
                          ? styles.navButtonActive
                          : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => onPageChange(pageKey)}
                    >
                      {pagesIndex.find((p) => p.id === pageKey)?.label}
                    </button>
                  ))}
                </Dropdown>
              );
            default:
              <></>;
          }
        })}
      </nav>
      <DarkModeToggle />
    </aside>
  );
}

function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.themeToggle[theme]}>
      <span>{`${theme === "light" ? "Light" : "Dark"} Mode`}</span>
      <button
        type="button"
        className={styles.themeToggleButton}
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
}
