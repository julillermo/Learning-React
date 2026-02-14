import { FetchDemo } from "./pages/FetchDemo";
import Home from "./pages/Home";
import { HooksPlayground } from "./pages/HooksPlayground";
import { Context } from "./pages/managing-state/Context";
import { Reducer } from "./pages/managing-state/Reducer";
import type { NavItem, Page } from "./types/sidebar";

export const pagesIndex: Page[] = [
  { id: "home", label: "Home", component: <Home /> },
  { id: "hooks", label: "Hooks Playground", component: <HooksPlayground /> },
  { id: "fetch", label: "Fetch / Effect Demo", component: <FetchDemo /> },
  { id: "reducer", label: "Reducer Demo", component: <Reducer /> },
  { id: "context", label: "Context Demo", component: <Context /> },
];

export const navItems: NavItem[] = [
  { kind: "page", id: "home", label: "Home", pageKeys: ["home"] },
  {
    kind: "dropdown",
    id: "guides-dropdown",
    label: "Guides (test-only)",
    pageKeys: ["fetch", "hooks"],
  },
  {
    kind: "dropdown",
    id: "managing-state-dropdown",
    label: "Managing State",
    pageKeys: ["reducer", "context"],
  },
];
