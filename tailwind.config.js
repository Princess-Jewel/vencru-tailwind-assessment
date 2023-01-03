/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#fff',
        // 'sidebar-bg': 'red',
        'search-text': '#667085',
        'search-border': '#D0D5DD',
        'dashboard-link-bg': '#F9FAFB',
        'dashboard-link-text': '#344054',
        'aside-text': '#101828',
        'aside-aside': '#6941C6',
        'divider':'#EAECF0'
      },
      fontFamily: {
        display: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
