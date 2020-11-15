import { isString } from 'lodash'

const variants = {
  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: '1.16',
  },
  h2: {
    fontWeight: 500,
    fontSize: '2.25rem',
    lineHeight: '48px',
  },
  h3: {
    fontWeight: 400,
    fontSize: '2rem',
    lineHeight: '48px',
  },
  h4: {
    fontWeight: 400,
    fontSize: '1.75rem',
    lineHeight: '32px',
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: '1.5em',
  },
  h6: {
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '1.5em',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '16px',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5em',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '20px',
  },
  caption: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
}

export type TypographyVariants = keyof typeof variants

const styleColors = {
  primary: '#CB5254',
  info: '#3B76FA',
  whatsapp: '#25BB66',
}

const theme = {
  borderRadius: {
    block: '16px',
  },
  shadow: 'rgba(13, 13, 13, 0.32) 0px 3px 7px 0px',
  colors: {
    ...styleColors,
    white: '#f0f0f0',
    background: {
      main: '#FDFDFD',
      surface: '#EFEFEF',
    },
    text: {
      main: '#575757',
      secondary: '#999',
      tertiary: '#222',
    },
    divider: '#DCD8D8',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  heights: {
    get header() {
      return 84
    },
  },
  spacing: (...args: Array<string | number>) =>
    args
      .map((item: string | number) =>
        isString(item) ? item : `${0.5 * item}rem`
      )
      .join(' '),
  variants,
  textStyle: (variant: TypographyVariants) => ({
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Montserrat, sans-serif, Arial;',
    ...theme.variants[variant],
  }),
}

export type Theme = typeof theme

export type StyleColors = keyof typeof styleColors

export type TypographyColors = keyof typeof theme.colors.text

export default theme
