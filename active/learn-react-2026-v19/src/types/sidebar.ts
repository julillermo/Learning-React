import type { ReactNode } from "react";

export type PageKey = "home" | "hooks" | "fetch";
export type Page = {
  id: PageKey;
  label: string;
  component: ReactNode;
};
