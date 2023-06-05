/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ['SFUIText', 'ui-sans-serif', 'system-ui', '-apple-system',
      'Helvetica Neue', 'Arial', 'sans-serif', 'Roboto', 'Segoe UI'],
    },
  },
  plugins: [],
}
