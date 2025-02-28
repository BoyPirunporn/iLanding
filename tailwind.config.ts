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
      padding: {
        DEFAULT: "1rem", // ค่าเริ่มต้น (16px)
        xs: "1.5rem",
        sm: "2rem",      // 32px เมื่อหน้าจอเล็ก
        md: "3rem",      // 48px เมื่อหน้าจอกลาง
        lg: "4rem",      // 64px เมื่อหน้าจอใหญ่
        xl: "5rem",      // 80px เมื่อจอใหญ่มาก
      },
      screens: {
        xs: "374px",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        '2xl': '1320px',
      }
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
        nunito: ["'Nunito Sans'", "sans-serif"],
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
      },
      backgroundImage:{
        'custom-grandient':'linear-gradient(180deg,#fde1ff,#e1ffea22 60%)'
      }
    },
  },
  plugins: [],
} satisfies Config;
