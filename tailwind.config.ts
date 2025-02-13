import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "374px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': '1400px',
    },
    extend: {
      content: {
        'checkmark': "\f26a"
      },
      fontFamily: {
        nunito:["'Nunito Sans'","sans-serif"],
        primary: "var(--font-nunito), sans-serif"
      },
      colors: {
        primary: '#2d465e',
        accent: {
          DEFAULT: '#0d83fd',
          hover: '#00e187'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        '15': '15deg',
        '-10': '-10deg'
      },
      keyframes: {
        'shaps-float': {
          '0,100%': { transform: 'scale(0.8) rotate(45deg)  translateY(0)' },
          '50%': { transform: 'scale(0.8) rotate(45deg)  translateY(-20)' },
        }
      },
      animation: {
        'shaps-float': "shaps-float 3s infinite ease-in-out"
      }
    },
  },
  plugins: [],
} satisfies Config;
