import { style, styleVariants } from "@vanilla-extract/css";

export const dropdown = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid rgba(100, 108, 255, 0.16)",
  borderRadius: "10px",
  background: "rgba(100, 108, 255, 0.06)",
  overflow: "hidden",
});

export const dropdownTheme = styleVariants({
  light: {
    background: "rgba(100, 108, 255, 0.06)",
    borderColor: "rgba(100, 108, 255, 0.2)",
  },
  dark: {
    background: "rgba(255, 255, 255, 0.04)",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0.75rem 0.9rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  letterSpacing: "0.01em",
});

export const triggerTheme = styleVariants({
  light: {
    color: "#1f2029",
  },
  dark: {
    color: "#f5f6fa",
  },
});

export const caret = style({
  display: "inline-block",
  transition: "transform 0.2s ease",
  color: "rgba(100, 108, 255, 0.6)",
});

export const caretOpen = style({
  transform: "rotate(90deg)",
  color: "rgba(100, 108, 255, 1)",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  gap: "0.35rem",
  background: "transparent",
});

export const contentClosed = style({
  display: "none",
});
