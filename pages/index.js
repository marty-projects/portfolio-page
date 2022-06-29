import NextLink from 'next/link'
import {Container, Box, Heading, Image, Link, List, ListItem, Button, SimpleGrid, Icon, useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/Layouts/Article'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { BioSection, BioYear } from '../components/Bio'
import { GridItem } from '../components/GridItem'
import { 
    IoLogoGithub,
    IoLogoLinkedin,
} from 'react-icons/io5'
import thumbTetris from '../public/images/projects/tetris_eyecatch.png'

const Page = () => {
    return (
    <Layout>
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
                <NextLink href="/projects">
                    <Button rightIcon={<ChevronRightIcon/>}
                    colorScheme="teal">
                    My Portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
            Bio
            </Heading>
            <BioSection>
                <BioYear>
                    2019
                </BioYear>
                Completed the Master&apos;s Program in Translation and International Communication at Jagiellonian University, Krakow, Poland.
            </BioSection>
            <BioSection>
                <BioYear>
                    2020-2022
                </BioYear>
                Work as a Freelance Translator
            </BioSection>
            <BioSection>
                <BioYear>
                    2022
                </BioYear>
                Started working as a Freelance Front End Developer
            </BioSection>
        </Section>
            <Section delay={0.3}>
                <Paragraph>
                    My interests include video games and art.
                </Paragraph>
            </Section>

        <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="http://github.com/monkert" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                            @monkert
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="http://linkedin.com/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                            Martyna Chmielinska
                        </Button>
                        </Link>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                    href="http://github.com"
                    title="Tetris Clone"
                    thumbnail = {thumbTetris} >
                        A Tetris clone build with React Hooks.
                    </GridItem>
                </SimpleGrid>
        </Section>
    </Container>
    </Layout>
    )
}

export default Page;