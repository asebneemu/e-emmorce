/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Vite için uygun içerik yolu
  ],
  theme: {
    extend: {
      screens: {
        "4xs": "340px",
        '3xs': '410px', // 410px ve yukarısı için
        '2xs': '540px', // 540px ve yukarısı için
        '1190': '1190px', // 1170px ve üzeri için özel breakpoint
      },
      scale: {
        '135': '1.35', // %135 oranında ölçeklendirme için
      },
    },
  },
  plugins: [],
}

