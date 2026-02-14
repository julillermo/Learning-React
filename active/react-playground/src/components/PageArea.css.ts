import { style, styleVariants } from "@vanilla-extract/css";
import { elevatedCardBase } from "../styles/cards";
import {
  darkBorder,
  darkSurface,
  lightBorder,
  lightSurface,
} from "../styles/colors";

export const pageArea = style({
  ...elevatedCardBase,
  flex: "1 1 auto",
  padding: "1.5rem",
  borderRadius: "14px",
  background: darkSurface,
  border: `1px solid ${darkBorder}`,
  // minHeight: "100%",
  //   minHeight: 0,
  maxHeight: "100%",
  overflow: "auto",
});

export const pageTheme = styleVariants({
  light: {
    background: lightSurface,
    borderColor: lightBorder,
    color: "#111",
  },
  dark: {
    background: darkSurface,
    borderColor: darkBorder,
  },
});
