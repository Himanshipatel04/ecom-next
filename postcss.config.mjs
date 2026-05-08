// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new v4 plugin
    // Remove 'tailwindcss': {}, if it's here
    'autoprefixer': {},
  },
}