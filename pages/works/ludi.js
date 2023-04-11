import {
//  Box,
  Container,
  Badge,
//  Link,
//  List,
//  ListItem,
  SimpleGrid,
//  UnorderedList,
//  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Ludi">
    <Container>
      <Title>
         <Badge>2022</Badge>
      </Title>
      <div>
        Ludi stays for - Lung Disease classification. Based on the given unstructures image data, such as image of a chest X-ray, LuDi
        can train its neural network to diagnose whether or not a patient suffers from one of the fourteen pathological conditions.
        Algorithm could classify clinically important abnormalities on chest radiographs at a performance level comparable to practicing radiologists.
      </div>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://epital.com/da/">
            https://www.epital.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Java, Python, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Tensorflow, Keras</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2} >
        <WorkImage src="/images/works/x-ray.png" alt="ludi" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
