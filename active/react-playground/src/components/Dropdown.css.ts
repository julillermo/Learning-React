import { style, styleVariants } from "@vanilla-extract/css";
import { accent, darkBorder, darkSurface } from "../styles/colors";

export const dropdown = style({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${accent(0.16)}`,
  borderRadius: "10px",
  background: accent(0.06),
  overflow: "hidden",
});

export const dropdownTheme = styleVariants({
  light: {
    background: accent(0.02),
    borderColor: accent(0.2),
  },
  dark: {
    background: darkSurface,
    borderColor: darkBorder,
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
  color: accent(0.6),
});

export const caretOpen = style({
  transform: "rotate(-90deg) scale(1.1)",
  color: accent(1),
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
