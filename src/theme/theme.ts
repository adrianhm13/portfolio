export type ThemeCustom = typeof theme

//xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const theme = {
        primary: {
            main: '#191d32',
            light: '#282f44'
        },
        secondary: {
            main: '#5a189a',
            light: '#e0aaff'
        },
        typography: {
            fontMono: 'Roboto Mono, sans-serif',
            fontPoppins: 'Poppins, sans-serif',
            h1: {
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                fontSize: '6rem',
                paddingTop: '1rem'
            },
            title: {
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                fontSize: '6rem',
                paddingBottom: '1rem',
                paddingTop: '1rem'
            },
            subtitle: {

            },
            content: {

            },
            hello: {
                fontFamily: 'Roboto Mono, sans-serif',
                fontSize: "1rem",
            }
        },
        padding: {
            small: '1rem',
            normal: '2rem',
            large: '3rem',
            extraLarge: '5rem',
        }
    }