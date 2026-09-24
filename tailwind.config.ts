import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

/**
 * Relume Tailwind preset + OCA brand overrides.
 * @see https://react-docs.relume.io/getting-started/tailwind
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      colors: {
        brand: {
          black: "var(--color-ink)",
          white: "var(--color-paper)",
          teal: "var(--color-teal)",
          rust: "var(--color-rust)",
          moss: "var(--color-moss)",
          tangerine: "var(--color-tangerine)",
          seafoam: "var(--color-seafoam)",
          goldenrod: "var(--color-goldenrod)",
          oat: "var(--color-oat)",
          cocoa: "var(--color-cocoa)",
        },
        neutral: {
          DEFAULT: "var(--color-muted-ink)",
          black: "var(--color-ink)",
          white: "var(--color-paper)",
          lightest: "var(--color-paper)",
          lighter: "var(--color-oat)",
          light: "var(--color-muted-ink)",
          dark: "var(--color-cocoa)",
          darker: "var(--color-ink)",
          darkest: "var(--color-ink)",
        },
        background: {
          DEFAULT: "var(--color-paper)",
          primary: "var(--color-paper)",
          secondary: "var(--color-oat)",
          tertiary: "var(--color-muted-ink)",
          alternative: "var(--color-ink)",
          success: "var(--color-seafoam)",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "var(--color-ink)",
          primary: "var(--color-ink)",
          secondary: "var(--color-muted-ink)",
          tertiary: "var(--color-cocoa)",
          alternative: "var(--color-paper)",
          success: "var(--color-moss)",
          error: "#9b1c1c",
        },
        text: {
          DEFAULT: "var(--color-ink)",
          primary: "var(--color-ink)",
          secondary: "var(--color-muted-ink)",
          alternative: "var(--color-paper)",
          success: "var(--color-moss)",
          error: "#9b1c1c",
        },
        link: {
          DEFAULT: "var(--color-teal)",
          primary: "var(--color-teal)",
          secondary: "var(--color-rust)",
          alternative: "var(--color-paper)",
        },
      },
    },
  },
};

export default config;
