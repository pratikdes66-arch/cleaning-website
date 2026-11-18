import type { Config } from "tailwindcss";
const c = (n: string) => `hsl(var(--${n}))`;
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      fontFamily: { sans: ["Poppins", "system-ui", "sans-serif"] },
      colors: {
        background: c("background"), foreground: c("foreground"), border: c("border"), input: c("input"), ring: c("ring"),
        primary: { DEFAULT: c("primary"), foreground: c("primary-foreground") },
        secondary: { DEFAULT: c("secondary"), foreground: c("secondary-foreground") },
        accent: { DEFAULT: c("accent"), foreground: c("accent-foreground") },
        muted: { DEFAULT: c("muted"), foreground: c("muted-foreground") },
        card: { DEFAULT: c("card"), foreground: c("card-foreground") },
        popover: { DEFAULT: c("popover"), foreground: c("popover-foreground") },
        destructive: { DEFAULT: c("destructive"), foreground: c("destructive-foreground") },
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 4px)", sm: "calc(var(--radius) - 8px)" },
      boxShadow: { soft: "0 8px 30px -12px hsl(var(--primary) / .25)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
