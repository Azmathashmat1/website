import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",   // Custom background color using CSS variable
        foreground: "var(--foreground)",   // Custom foreground color using CSS variable
        primary: "#ff6600",                // Example custom color
        secondary: "#0099cc",              // Example custom color
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],  // Example custom font family
        heading: ["Poppins", "sans-serif"],  // Custom font for headings
      },
      spacing: {
        "72": "18rem",  // Custom spacing value
        "84": "21rem",  // Custom spacing value
      },
      borderRadius: {
        "4xl": "2rem",  // Example for a large border-radius
      },
      boxShadow: {
        "light": "0 2px 4px rgba(0, 0, 0, 0.1)",  // Example custom box shadow
        "xl": "0 10px 20px rgba(0, 0, 0, 0.15)",  // Example custom box shadow
      },
    },
  },
  plugins: [],
};

export default config;

