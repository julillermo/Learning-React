import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const onHeaderClickVar = createVar();

export const sidebar = style({
  minWidth: "220px",
  borderRadius: "12px",
  padding: "1.5rem",
  border: "1px solid rgba(15, 15, 20, 0.1)",
  background: "rgba(19, 19, 24, 0.8)",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "2px",
  transition:
    "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
});

export const sidebarTheme = styleVariants({
  light: {
    background: "#ffffff",
    borderColor: "rgba(27, 27, 36, 0.18)",
  },
  dark: {
    background: "rgba(255, 255, 255, 0.04)",
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
      borderColor: "rgba(100, 108, 255, 0.4)",
    },
  },
});

export const navButtonActive = style({
  background:
    "linear-gradient(90deg, rgba(100, 108, 255, 0.2), rgba(81, 91, 242, 0.05))",
  borderColor: "rgba(100, 108, 255, 0.25)",
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

export const themeToggle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2.5rem",
  padding: "0.75rem 0.5rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
});

export const themeToggleButton = style({
  border: "1px solid rgba(15, 15, 20, 0.3)",
  borderRadius: "999px",
  padding: "0.35rem 0.85rem",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
});
