import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)'],
        sora: ['var(--font-sora)'],
        'roboto': ['Roboto'],
        'nunito': ['Nunito'],
        
      },
      backgroundImage: {
        'image-icons': "url('/assets/icons.svg)",
      },
      colors: {
        primary: {
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
        'thrindle-blue': '#065DA7',
        'thrindle-green': '#25D366',
        'download-yellow': '#FEA218',
        'thrindle-black': '#1B1C1E',
        'thrindle-grey': '#F1F1F1',
        'footer-bg': '#3B3B3B',
        'download-bg': '#FDFEFF',
        'download-btn': '#3B3B3B',
        'bg-blue': '#F4F7FA',
        'inst-text': '#515151',
        'member-blue':'#3362CC',
        'course-btn': '#3B3B3B',
        'heading':'#130F25',
        'course-white':'#D3D7DC40',
        'progress':'#C4C4C4',
        'grey':'#605E5E',
        
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
