import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/Section'
import { ProjectGridItem } from '../components/GridItem'
import Layout from '../components/Layouts/Article'
import thumbTetris from '../components/images/projects/tetris-eyecatch.png'
import thumbSpaceInvaders from '../components/images/projects/space-invaders.png'

//CANNOT SEE
const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="tetris" title="Tetris Clone" thumbnail={thumbTetris}>
                        A Tetris clone build using React Hooks.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="space-invaders" title="Space Invaders Clone" thumbnail={thumbSpaceInvaders}>
                        A Space Invaders clone build using Canvas API.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects

