module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep navy for financial trust and stability
        primary: {
          DEFAULT: "#1a365d", // navy-900
          50: "#f0f4f8", // navy-50
          100: "#d6e3f0", // navy-100
          200: "#b8cde0", // navy-200
          300: "#9bb7d0", // navy-300
          400: "#7ea1c0", // navy-400
          500: "#618bb0", // navy-500
          600: "#4a6b8a", // navy-600
          700: "#334b64", // navy-700
          800: "#1c2b3e", // navy-800
          900: "#1a365d", // navy-900
        },
        // Secondary Colors - Growth green for positive outcomes and sustainability
        secondary: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
        },
        // Accent Colors - Confident blue for interactive elements and links
        accent: {
          DEFAULT: "#3182ce", // blue-600
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2b77cb", // blue-600
          700: "#2c5aa0", // blue-700
          800: "#2a4365", // blue-800
          900: "#1a365d", // blue-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2d3748", // gray-800
          secondary: "#718096", // gray-500
          muted: "#a0aec0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#38a169", // green-500
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffbeb", // yellow-50
          100: "#fef3c7", // yellow-100
          500: "#d69e2e", // yellow-500
        },
        error: {
          DEFAULT: "#e53e3e", // red-600
          50: "#fed7d7", // red-50
          100: "#fed7d7", // red-100
          500: "#e53e3e", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          focus: "#3182ce", // blue-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'prominent': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 250ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}