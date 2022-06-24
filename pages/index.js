import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I&apos;m a front-end developer based in EU!
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGrow={1} align="center">
                <Heading as="h2" variant="page-title" >
                    Martyna Chmielinska
                </Heading>
                <p>Front End Developer With Background in Localization</p>
            </Box>
        </Box>
    </Container>
    )
}

export default Page;