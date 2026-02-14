const accentRgb = "100, 108, 255";

export const accent = (alpha: number) => `rgba(${accentRgb}, ${alpha})`;
export const softAccentGradient = `linear-gradient(90deg, ${accent(0.2)}, rgba(81, 91, 242, 0.05))`;

export const lightSurface = "#ffffff";
export const lightBorder = "rgba(15, 15, 20, 0.2)";

export const darkSurface = "rgba(255, 255, 255, 0.04)";
export const darkBorder = "rgba(255, 255, 255, 0.08)";
