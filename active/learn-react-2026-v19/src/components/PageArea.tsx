import type { Page } from "../types/sidebar";

export function PageArea({ pages, active }: { pages: Page[]; active: string }) {
  return <main>{pages.find((p) => p.id === active)?.component}</main>;
}
