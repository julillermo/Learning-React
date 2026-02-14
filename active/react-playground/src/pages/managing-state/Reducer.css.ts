import { style, styleVariants } from "@vanilla-extract/css";
import {
  accent,
  darkBorder,
  darkSurface,
  lightBorder,
  lightSurface,
} from "../../styles/colors";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const listStack = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

const rowBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  borderRadius: "12px",
  padding: "0.9rem 1rem",
  border: "1px solid",
  transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
});

export const rowTheme = styleVariants({
  light: [
    rowBase,
    {
      background: lightSurface,
      borderColor: lightBorder,
      color: "#111",
    },
  ],
  dark: [
    rowBase,
    {
      background: darkSurface,
      borderColor: darkBorder,
      color: "#f6f6f8",
    },
  ],
});

export const itemText = style({
  fontWeight: 600,
  letterSpacing: "0.01em",
});

const buttonBase = style({
  borderRadius: "10px",
  border: "1px solid",
  fontWeight: 600,
  padding: "0.55rem 0.95rem",
  cursor: "pointer",
  transition:
    "background 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.2s ease",
});

export const primaryButton = styleVariants({
  light: [
    buttonBase,
    {
      background: accent(0.18),
      color: "#13131a",
      borderColor: accent(0.32),
      selectors: {
        "&:hover": {
          background: accent(0.26),
          borderColor: accent(0.46),
          boxShadow: `0 6px 18px ${accent(0.2)}`,
        },
      },
    },
  ],
  dark: [
    buttonBase,
    {
      background: accent(0.4),
      color: "#f7f7fb",
      borderColor: accent(0.62),
      selectors: {
        "&:hover": {
          background: accent(0.55),
          borderColor: accent(0.78),
          boxShadow: `0 8px 22px ${accent(0.28)}`,
        },
      },
    },
  ],
});

export const subtleButton = styleVariants({
  light: [
    buttonBase,
    {
      background: "transparent",
      color: "#1f2029",
      borderColor: "rgba(0, 0, 0, 0.14)",
      selectors: {
        "&:hover": {
          color: accent(0.9),
          borderColor: accent(0.32),
        },
      },
    },
  ],
  dark: [
    buttonBase,
    {
      background: "transparent",
      color: "#f5f6fa",
      borderColor: "rgba(255, 255, 255, 0.16)",
      selectors: {
        "&:hover": {
          color: accent(0.95),
          borderColor: accent(0.55),
        },
      },
    },
  ],
});

const inputBase = style({
  flex: 1,
  borderRadius: "10px",
  padding: "0.65rem 0.75rem",
  fontSize: "1rem",
  border: "1px solid",
  transition:
    "border-color 0.25s ease, background 0.25s ease, color 0.25s ease, box-shadow 0.2s ease",
});

export const inputTheme = styleVariants({
  light: [
    inputBase,
    {
      background: "rgba(0, 0, 0, 0.02)",
      color: "#13131a",
      borderColor: "rgba(0, 0, 0, 0.14)",
      selectors: {
        "&:focus": {
          outline: "none",
          borderColor: accent(0.42),
          boxShadow: `0 0 0 3px ${accent(0.18)}`,
        },
      },
    },
  ],
  dark: [
    inputBase,
    {
      background: "rgba(255, 255, 255, 0.04)",
      color: "#f6f6f8",
      borderColor: "rgba(255, 255, 255, 0.18)",
      selectors: {
        "&:focus": {
          outline: "none",
          borderColor: accent(0.6),
          boxShadow: `0 0 0 3px ${accent(0.28)}`,
        },
      },
    },
  ],
});

export const inputRow = style({
  display: "flex",
  flex: 1,
  gap: "0.75rem",
  alignItems: "center",
});
