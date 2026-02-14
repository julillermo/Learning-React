import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { elevatedCardBase } from "../styles/cards";
import {
  accent,
  darkBorder,
  darkSurface,
  softAccentGradient,
} from "../styles/colors";

export const onHeaderClickVar = createVar();

export const sidebar = style({
  minWidth: "220px",
  borderRadius: "12px",
  padding: "1.5rem",
  border: "1px solid rgba(15, 15, 20, 0.1)",
  background: "rgba(19, 19, 24, 0.8)",
  ...elevatedCardBase,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "2px",
});

export const sidebarTheme = styleVariants({
  light: {
    background: "#ffffff",
    borderColor: "rgba(27, 27, 36, 0.18)",
  },
  dark: {
    background: darkSurface,
    borderColor: darkBorder,
  },
});

export const title = style({
  margin: 0,
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  selectors: {
    "&:hover": {
      cursor: onHeaderClickVar,
    },
  },
});

export const logo = style({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  selectors: {
    "&:hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
});

export const nav = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.5rem",
});

export const navButton = style({
  textAlign: "left",
  width: "100%",
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.55rem 0.85rem",
  background: "transparent",
  transition: "background 0.3s ease, border-color 0.3s ease",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      borderColor: accent(0.4),
    },
  },
});

export const navButtonActive = style({
  background: softAccentGradient,
  borderColor: accent(0.25),
});

export const navButtonTheme = styleVariants({
  light: {},
  dark: {
    color: "#f6f6f8",
  },
});

export const hint = style({
  marginTop: "1rem",
  color: "#888",
  fontSize: "0.9rem",
});

const baseThemeToggle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2.5rem",
  padding: "0.75rem 0.5rem",
};

export const themeToggle = styleVariants({
  light: {
    ...baseThemeToggle,
    borderTop: "1px solid rgba(0, 0, 0, 0.08)",
  },
  dark: {
    ...baseThemeToggle,
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  },
});

export const themeToggleButton = style({
  border: "1px solid rgba(15, 15, 20, 0.3)",
  borderRadius: "999px",
  padding: "0.35rem 0.85rem",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
});
