import { useTheme } from "../hooks/theme";
import type { Page } from "../types/sidebar";
import * as styles from "./PageArea.css";

type PageAreaProps = {
  pages: Page[];
  active: string;
};

export function PageArea({ pages, active }: PageAreaProps) {
  const { theme } = useTheme();

  return (
    <main className={`${styles.pageArea} ${styles.pageTheme[theme]}`}>
      {pages.find((p) => p.id === active)?.component}
    </main>
  );
}
