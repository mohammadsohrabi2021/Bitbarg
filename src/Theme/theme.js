import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [{
                props: {
                    variant: 'mainButton'
                },
                style: {
                    color: '#fff',
                    backgroundColor: 'rgb(66, 133, 242)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    height: 35,
                    width: '100%',
                    transition: " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    '&:hover': {
                        backgroundColor: 'rgb(66, 133, 242)',
                    }
                }
            }, {
                props: { variant: 'secondaryButton' },
                style: {
                    color: "#727272",
                    borderRadius: '4px',
                    height: 35

                }
            }]
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    boxSizing: 'border-box',
                    '.flexDir': {
                        '@media only screen and (max-width:590px)': {
                            flexDirection: 'column'
                        }
                    },
                    'a': {
                        textDecoration: 'none'
                    },
                }

            }

        },
    },
    palette: {
        primary: {
            main: "rgb(66, 133, 242)"
        },
        secondary: {
            main: "#f2f2f2"
        }
    },
    typography: {
        fontFamily: 'IRANSANS',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h2: {

            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '18px',
            color: 'rgba(0, 0, 0, 0.85)'
        },
        title1: {
            fontSize: "0.8rem",
            fontWeight: 400,
            lineHeight: 1.5,

        },
        title2: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '21px',

        },
        button: {
            fontSize: "0.8rem",
            fontWeight: 400,
            lineHeight: 1.75,
            color: '#727272',
        },

    }
})