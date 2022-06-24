import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layouts/Main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'


function Website ({Component, pageProps, router}) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website