import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="widtg=device-width, initial-scale=1" />
                <title>Martyna Chmielinska - Homepage</title>
            </Head>
            <Navbar parth={router.asPath} />

        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>

    )
}

export default Main