import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:                  '#012435',
        'primary-container':      '#1b3a4b',
        'primary-fixed':          '#c8e7fd',
        'primary-fixed-dim':      '#accbe0',
        'on-primary':             '#ffffff',
        'on-primary-container':   '#85a4b8',
        secondary:                '#7c572d',
        'secondary-container':    '#fecb97',
        'secondary-fixed':        '#ffdcbc',
        'secondary-fixed-dim':    '#efbd8a',
        'on-secondary':           '#ffffff',
        'on-secondary-container': '#79542a',
        'on-secondary-fixed':     '#2c1700',
        tertiary:                 '#002627',
        'tertiary-container':     '#003e3f',
        'on-tertiary':            '#ffffff',
        'on-tertiary-container':  '#62acad',
        surface:                  '#f9f9f7',
        'surface-dim':            '#dadad8',
        'surface-bright':         '#f9f9f7',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f4f4f2',
        'surface-container':         '#eeeeec',
        'surface-container-high':    '#e8e8e6',
        'surface-container-highest': '#e2e3e1',
        'on-surface':             '#1a1c1b',
        'on-surface-variant':     '#42474c',
        outline:                  '#72787c',
        'outline-variant':        '#c2c7cc',
        error:                    '#ba1a1a',
      },
      fontFamily: {
        headline: ['Newsreader', 'serif'],
        body:     ['Pretendard', 'Inter', 'sans-serif'],
        label:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        full:    '9999px',
      },
    },
  },
  plugins: [],
}

export default config
