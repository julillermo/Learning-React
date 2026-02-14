import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  color: "inherit",
  backgroundColor: "transparent",
  border: "1px solid currentColor",
  borderRadius: "8px",
  padding: "0.45rem 1rem",
  cursor: "pointer",
  transition: "color 0.3s ease, border-color 0.3s ease",
});
