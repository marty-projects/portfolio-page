import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import {EternalLinkIcon, ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, ProjectImage, Meta} from '../../components/Project'
import P from '../../components/Paragraph'
import Layout from '../../components/Layouts/Article'

const ProjectWeather = () => {
    return (
        <Layout title="Tetris">
            <Container>
                <Title>
                    Tetris Clone
                </Title>
                    <P>
                       A clone of Tetris built with React Hooks, styled with  
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href='http://'>
                                [address] <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>some text</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>NodeJS, React</span>
                        </ListItem>
                        <ListItem>
                           <Meta>Blogpost</Meta>
                           <Link href=''>Description</Link>
                                <ExternalLinkIcon mx="2px"/>
                        </ListItem>
                    </List>

                <ProjectImage src="/images/projects/tetris_01.png" alt="Tetris clone"/>
                <ProjectImage src="/images/projects/tetris_02.png" alt="Tetris clone"/>
            </Container>
        </Layout>
    )
}

export default ProjectWeather