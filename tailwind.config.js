/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        brand: 'var(--brand)',
        'brand-2': 'var(--brand-2)',
        'brand-accent': 'var(--brand-accent)',
        ink: 'var(--text)',
        muted: 'var(--text-muted)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.34em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22,1,0.36,1)',
        sharp: 'cubic-bezier(0.32,0.72,0,1)',
      },
      maxWidth: {
        wrap: '1400px',
      },
    },
  },
  plugins: [],
}
