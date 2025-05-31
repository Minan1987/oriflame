export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e84ea0', // رنگ اصلی
          600: '#d83790',
          700: '#b72c78',
          800: '#93245f',
          900: '#701b48',
        },
        secondary: '#C8B8B6', // رنگ ثانویه
        dark: '#4E4E4E', // رنگ تیره
        light: '#ffffff', // رنگ روشن
      },
      fontFamily: {
        sans: ['tanha', 'tahoma'], // فونت اصلی شما
      },
      spacing: {
        '128': '32rem', // فاصله سفارشی برای استفاده
      },
      boxShadow: {
        'dark-1': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'dark-2': '0 4px 10px rgba(0, 0, 0, 0.2)',
      },
      // تنظیمات اضافی دیگر مانند فونت‌ها و فضاها
    },
  },
  plugins: [],
}
