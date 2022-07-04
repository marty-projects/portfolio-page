import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import VoxelAlienLoader from '../VoxelAlienLoader'

const LazyVoxelALien = dynamic(() => import('../VoxelAlien'), {
    ssr: false,
    loading: () => <VoxelAlienLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="widtg=device-width, initial-scale=1" />
                <meta name="description" content="Martyna's homepage" />
                <meta name="author" content="Martyna Chmielinska" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Takuya Matsuyama" />
                <meta name="og:title" content="Martyna Chmielinska" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://.png" />
                <title>Martyna Chmielinska - Homepage</title>
            </Head>

            <Navbar parth={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelALien />

                {children}

                <Footer />
        </Container>
    </Box>

    )
}

export default Main