import { style, styleVariants } from "@vanilla-extract/css";

export const pageArea = style({
  flex: "1 1 auto",
  padding: "1.5rem",
  borderRadius: "14px",
  background: "rgba(255, 255, 255, 0.02)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
  minHeight: "100%",
  transition:
    "background 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
});

export const pageTheme = styleVariants({
  light: {
    background: "#ffffff",
    borderColor: "rgba(15, 15, 20, 0.2)",
    color: "#111",
  },
  dark: {
    background: "rgba(15, 15, 15, 0.9)",
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
});
