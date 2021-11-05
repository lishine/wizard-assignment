import { ThemeConfig, extendTheme } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                // bg: 'gray.900',
                // color: 'gray.100',
            },
        },
    },
    colors: {
        darkgreen: {
            50: '#00bf00',
            100: '#00bf00',
            200: '#006200', // static
            300: '#008900', // hover
            400: '#00b100', // active
            500: '#004000',
            600: '#004000',
            700: '#004000',
            800: '#004000',
            900: '#004000',
        },
        darkred: {
            50: '#00bf00',
            100: '#00bf00',
            200: '#890000', // static
            300: '#b10000', // hover
            400: '#d80000', // active
            500: '#004000',
            600: '#004000',
            700: '#004000',
            800: '#004000',
            900: '#004000',
        },
    },
    components: {
        Button: {
            variants: {
                solid: { color: 'white' },
            },
        },
    },
    config,
})
