import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Cyberpunk theme colors
        'cyber': {
          'neon': '#CCFF00',
          'dark': '#1A2B32',
          'black': '#000000',
          'white': '#F5F5F5',
          'smoke': '#4A6670',
          'accent': '#00FF9F',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        'neon': '0 0 3px theme(colors.cyber.neon), 0 0 10px theme(colors.cyber.neon)',
        'neon-strong': '0 0 5px theme(colors.cyber.neon), 0 0 20px theme(colors.cyber.neon)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%': { opacity: '0.27861' },
          '5%': { opacity: '0.34769' },
          '10%': { opacity: '0.23604' },
          '15%': { opacity: '0.90626' },
          '20%': { opacity: '0.18128' },
          '25%': { opacity: '0.83891' },
          '30%': { opacity: '0.65583' },
          '35%': { opacity: '0.67807' },
          '40%': { opacity: '0.26559' },
          '45%': { opacity: '0.84693' },
          '50%': { opacity: '0.96019' },
          '55%': { opacity: '0.08594' },
          '60%': { opacity: '0.20313' },
          '65%': { opacity: '0.71988' },
          '70%': { opacity: '0.53455' },
          '75%': { opacity: '0.37288' },
          '80%': { opacity: '0.71428' },
          '85%': { opacity: '0.70419' },
          '90%': { opacity: '0.7003' },
          '95%': { opacity: '0.36108' },
          '100%': { opacity: '0.24387' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'panel-open': {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.02)',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'panel-close': {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(1.02)',
          },
          '100%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          }
        },
        'decrypt': {
          '0%': { 
            content: 'var(--decrypt-0)'
          },
          '20%': { 
            content: 'var(--decrypt-1)'
          },
          '40%': { 
            content: 'var(--decrypt-2)'
          },
          '60%': { 
            content: 'var(--decrypt-3)'
          },
          '80%': { 
            content: 'var(--decrypt-4)'
          },
          '100%': { 
            content: 'var(--decrypt-final)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'glow': 'glow 3s ease-in-out infinite',
        'panel-open': 'panel-open 0.5s ease-out forwards',
        'panel-close': 'panel-close 0.5s ease-out forwards',
        'decrypt': 'decrypt 1s steps(5) forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config