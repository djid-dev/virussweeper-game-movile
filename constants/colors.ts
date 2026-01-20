import type { TextStyle } from "react-native";

export const bg_color = "#040308";
export const neon_red = "#ff003c";
export const neon_orange = "#f5890f";
export const neon_green = "#00ff9d";
export const neon_magenta = "#ff2ebe";
export const neon_cyan = "#00f6ff";
export const white = "#ffffff";

// React Native equivalents for the CSS neon text utilities.
// RN only supports a single text shadow (not multi-layer like CSS).
const neonShadow = (color: string, radius = 17): TextStyle => ({
  color,
  textShadowColor: color,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: radius,
});

export const neonText = {
  cyan: neonShadow(neon_cyan),
  green: neonShadow(neon_green),
  red: neonShadow(neon_red),
  orange: neonShadow(neon_orange),
  magenta: neonShadow(neon_magenta),
  white: neonShadow(white),
} satisfies Record<string, TextStyle>;

// Rainbow Retro notes:
// - Gradient text is not supported by default in RN Text.
// - Use `expo-linear-gradient` (or `react-native-linear-gradient`) + `@react-native-masked-view/masked-view`.
// - Animation ("rainbowLoop") needs an `Animated` value driving the gradient transform.
export const rainbowRetro = {
  text: {
    fontWeight: "700",
    letterSpacing: 0.08 * 16, // approximates 0.08em at 16px base
  } satisfies TextStyle,
  gradientColors: [
    "#00f6ff",
    "#ff2ebe",
    "#ff003c",
    "#f5890f",
    "#00ff9c",
    "#7a5cff",
    "#00f6ff",
  ],
  // Single-shadow approximation of the CSS multi-layer glow.
  glow: {
    textShadowColor: "rgba(0, 246, 255, 0.55)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  } satisfies TextStyle,
} as const;