import NextLink from 'next/link'
import {Container, Box, Heading, Image, Link, Button, useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'

const Page = () => {
    return (
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpa.200')} p={3} mb={6} align="center">
            Hello, I&apos;m a front-end developer based in EU!
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGrow={1} align="center">
                <Heading as="h2" variant="page-title" >
                    Martyna Chmielinska
                </Heading>
                <p>Front End Developer With Background in Localization</p>
            </Box>
            <Box flexShrink={0} 
            mt={{base: 4, md:0 }} 
            ml={{md: 6}} 
            align="center"
            >
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/ja.jpg" alt="Profile Image"/>
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Paragraph. Currently working on a project called{' '}
            <NextLink href="/works/project" colorScheme="teal">
                <Link>
                    Project
                </Link>
                
            </NextLink>
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>}
                    colorScheme="teal">
                    My Portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
    </Container>
    )
}

export default Page;