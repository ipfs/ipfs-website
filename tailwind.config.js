const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1440 };
const theme = {
  extend: {
    screens: Object.fromEntries(
      Object.entries(breakpoints).map(([k, v]) => [k, `${v}px`])
    ),
    colors: {
      blueGreen: '#34797D',
      blueGreenScreen: '#66989a',
      blueGreenLight: '#6BC4CE',
      deepBlue: '#002256',
      plBlack: '#16161F',
      gray: {
        background: '#f1f3f2',
        light: '#b7c0c3',
      },
      navy: '#0B3A53',
    },
    fontFamily: {
      sans: 'inter, sans-serif',
      serif: 'source-serif-pro, serif',
      display: 'montserrat, sans-serif',
    },
    fontSize: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      28: '1.75rem',
      35: '2.1875rem',
      50: '3.125rem',
    },
    letterSpacing: {
      tight: '-0.01em',
    },
    lineHeight: {
      120: '1.2',
      130: '1.3',
      140: '1.4',
      150: '1.5',
    },
    minHeight: {
      300: '18.75rem',
      640: '40rem',
    },
    maxHeight: {
      168: '42rem',
      1200: '75rem',
    },
    spacing: {
      '15px': '15px',
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.plBlack'),
          marginLeft: 'auto',
          marginRight: 'auto',
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.15'),
          letterSpacing: theme('letterSpacing.normal'),
          lineHeight: theme('lineHeight.140'),
          '@screen sm': {
            fontSize: theme('fontSize.15'),
            lineHeight: theme('lineHeight.150'),
          },
          h1: {
            fontFamily: theme('fontFamily.display'),
            lineHeight: theme('lineHeight.120'),
            fontWeight: theme('fontWeight.medium'),
            letterSpacing: theme('letterSpacing.tight'),
            fontSize: theme('fontSize.35'),
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #d1d1d663',
            '@screen lg': {
              fontSize: theme('fontSize.50'),
            },
          },
          h2: {
            fontSize: theme('fontSize.28'),
            lineHeight: theme('lineHeight.120'),
            fontFamily: theme('fontFamily.display'),
            fontWeight: theme('fontWeight.medium'),
            letterSpacing: theme('letterSpacing.tight'),
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #d1d1d663',
            '@screen sm': {
              fontSize: theme('fontSize.34'),
              lineHeight: theme('lineHeight.120'),
            },
          },
          h3: {
            fontFamily: theme('fontFamily.display'),
            fontWeight: theme('fontWeight.medium'),
            fontSize: theme('fontSize.28'),
            letterSpacing: theme('letterSpacing.tight'),
            lineHeight: theme('lineHeight.120'),
            marginTop: '1.5em',
            marginBottom: '1em',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #d1d1d663',
          },
          h4: {
            fontFamily: theme('fontFamily.sans'),
            fontWeight: theme('fontWeight.normal'),
            fontSize: '1.3rem',
            letterSpacing: theme('letterSpacing.normal'),
            lineHeight: theme('lineHeight.130'),
            marginTop: '1.2em',
          },
          h5: {
            fontFamily: theme('fontFamily.display'),
            fontWeight: theme('fontWeight.semibold'),
            fontSize: theme('fontSize.18'),
            letterSpacing: theme('letterSpacing.tight'),
            lineHeight: theme('lineHeight.130'),
            '@screen sm': {
              fontSize: theme('fontSize.22'),
            },
          },
          a: {
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.blueGreen'),
            textDecoration: 'none',
            wordWrap: 'break-word',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          blockquote: {
            borderLeftColor: theme('colors.deepBlue'),
          },
          code: {
            backgroundColor: 'rgba(27, 31, 35, 0.05)',
            borderRadius: '0.1875rem',
            color: 'rgba(51, 51, 51, 0.8)',
            fontSize: theme('fontSize.14'),
            fontWeight: theme('fontWeight.normal'),
            padding: '.15rem .3rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            '&::before': {
              content: 'none !important',
            },
            '&::after': {
              content: 'none !important',
            },
          },
          pre: {
            '&[class*="language-"]': {
              backgroundColor: '#0e2333',
              color: '#fff',
              fontSize: theme('fontSize.14'),
              overflowX: 'auto',
              padding: '1.2rem 1.5rem',
              textShadow: 'none',
            },
          },
          ul: {
            '& li::before': {
              backgroundColor: theme('colors.plBlack'),
            },
          },
          ol: {
            '> li::before': {
              color: theme('colors.plBlack'),
            },
          },
        },
      },
    }),
  },
};

module.exports = {
  theme,
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind.gradients'),
  ],
};
