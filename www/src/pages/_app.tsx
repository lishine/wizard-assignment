import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { useMountedState } from 'react-use'
import React, {
    useCallback,
    useRef,
    useState,
    useLayoutEffect,
    ReactNode,
    useEffect,
    ReactElement,
} from 'react'
import { theme } from '~/styles/theme'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.style.background = 'var(--chakra-colors-gray-800)'
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider resetCSS theme={theme}>
                <div>
                    {/* <button onClick={handleWork}>Calculate PI</button> */}

                    <Component {...pageProps} />
                </div>
            </ChakraProvider>
        </QueryClientProvider>
    )
}
const NoSSRComponent = ({ children }: { children: ReactElement }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted ? children : <main>empty</main>
}

/* eslint-disable react/display-name */
const NoSSR = (Component: any) => (props: any) =>
    (
        <NoSSRComponent>
            <Component {...props} />
        </NoSSRComponent>
    )

export default NoSSR(App)
