import type { Page } from "../types/sidebar";
import type { ThemeMode } from "../types/theme";
import * as styles from "./PageArea.css";

type PageAreaProps = {
  pages: Page[];
  active: string;
  theme: ThemeMode;
};

export function PageArea({ pages, active, theme }: PageAreaProps) {
  return (
    <main className={`${styles.pageArea} ${styles.pageTheme[theme]}`}>
      {pages.find((p) => p.id === active)?.component}
    </main>
  );
}
