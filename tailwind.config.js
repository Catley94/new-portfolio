/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        zen: {
          bg:          '#f4f4ef', // warm linen
          card:        '#fafaf8', // soft white
          heading:     '#2a3a2c', // deep forest
          body:        '#3d4d3f', // sage body text
          muted:       '#7d8f7f', // medium sage
          subtle:      '#a8b8aa', // light sage
          accent:      '#7aab96', // sage teal
          'accent-deep': '#5e9480', // deeper teal hover
          green:       '#8fb89e', // soft sage green
          border:      '#dde8dd', // pale sage border
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
