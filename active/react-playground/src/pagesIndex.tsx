import { FetchDemo } from "./pages/FetchDemo";
import Home from "./pages/Home";
import { HooksPlayground } from "./pages/HooksPlayground";
import type { NavItem, Page } from "./types/sidebar";

export const pagesIndex: Page[] = [
  { id: "home", label: "Home", component: <Home /> },
  { id: "hooks", label: "Hooks Playground", component: <HooksPlayground /> },
  { id: "fetch", label: "Fetch / Effect Demo", component: <FetchDemo /> },
];

export const navItems: NavItem[] = [
  {
    kind: "dropdown",
    id: "guides-dropdown",
    label: "Guides",
    pageKeys: ["home", "fetch"],
  },
  {
    kind: "page",
    id: "hooks",
    label: "Hooks Playground",
    pageKeys: ["hooks"],
  },
];
