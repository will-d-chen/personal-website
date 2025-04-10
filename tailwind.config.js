/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-spectral)'],
          serif: ['var(--font-spectral)'],
        },
        colors: {
          'custom-brown': '#423C30',
        },
        borderRadius: {
          'custom': '1rem',
        }
      },
    },
    plugins: [],
  }