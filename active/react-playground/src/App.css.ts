import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

globalStyle("#root", {
  width: "100%",
  minHeight: "100vh",
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html, body, #root", {
  width: "100%",
  minHeight: "100vh",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily:
    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  transition: "background-color 0.3s ease",
});

globalStyle('body[data-theme="light"]', {
  background: "#f0f2f8",
});

globalStyle('body[data-theme="dark"]', {
  background: "#05060a",
});

export const appRoot = style({
  display: "flex",
  gap: "1.5rem",
  alignItems: "stretch",
  minHeight: "100vh",
  height: "100vh",
  // overflow: "hidden",
  boxSizing: "border-box",
  padding: "2rem 1.5rem",
  transition: "background 0.4s ease, color 0.4s ease",
  width: "100%",
});

export const rootTheme = styleVariants({
  light: {
    background: "#f4f4fb",
    color: "#1b1b24",
  },
  dark: {
    background: "#05060a",
    color: "#f6f6f8",
  },
});
