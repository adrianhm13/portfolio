export type ThemeCustom = typeof theme;

//xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const theme = {
  white: "#FFFAFA",
  primary: {
    main: "#191d32",
    light: "#282f44",
    elevation: "#1F2435",
  },
  secondary: {
    main: "#5a189a",
    light: "#e0aaff",
  },
  fontWeight: {
    extraLight: '100',
    light: '200',
    normal: '300',
    bold: '500',
    extraBold: '900',
  },
  typography: {
    fontMono: "Roboto Mono, sans-serif",
    fontPoppins: "Poppins, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "500",
      fontSize: "6rem",
      paddingTop: "1rem",
    },
    title: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "500",
      fontSize: "6rem",
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
    pageTitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "500",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      paddingBottom: "1rem",
      paddingTop: "1rem",
      "&:before": {
        content: `'>>'`,
        fontWeight: "900",
        color: "#e0aaff",
        letterSpacing: "-15px",
        paddingRight: "1rem",
      },
      "&:after": {
        content: `'.'`,
        fontWeight: "900",
        color: "#e0aaff",
        letterSpacing: "-15px",
        paddingRight: "1rem",
      },
    },
    paragraph: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "1rem",
    },
    content: {},
    hello: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "1rem",
      margin: '0',
    },
  },
  padding: {
    extraSmall: "0.5rem",
    small: "1rem",
    normal: "2rem",
    large: "3rem",
    extraLarge: "5rem",
    badge: {
      X: '0.75rem',
      Y: '0.5rem'
    }
  },
};
