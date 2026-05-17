/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      colors: {
        bg: 'var(--color-bg)',
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        border: 'var(--color-border)',
        code: 'var(--color-code-bg)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
