/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: "var(--base)",
        form: "var(--form-container)",
        cta: "var(--primary-cta)",
        customGray: "var(----secondary-text)",
        ["form-fields"]: "var(--form-fields)",
        ["prim-txt"]: "var(--primary-text)",
        ["sec-txt"]: "var(--secondary-text)"
      },
    },
  },
  plugins: [],
};
