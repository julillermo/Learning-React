import type { ReactNode } from "react";

export type PageKey = "home" | "hooks" | "fetch" | "reducer" | "context";

export type Page = {
  id: PageKey;
  label: string;
  component: ReactNode;
};

export type NavItem = {
  kind: "dropdown" | "page";
  id: string;
  label: string;
  pageKeys: PageKey[];
};
