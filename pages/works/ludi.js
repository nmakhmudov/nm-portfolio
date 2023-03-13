import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'

const Work = () => (
  <Layout title="Ludi">
    <Container>
      <Title>
         <Badge>2022</Badge>
      </Title>
      <div>
        Based on the given unstructures image data, such as image of a chest X-ray, LuDi
        can train its neural network to diagnose whether or not a patient suffers from one of the fourteen pathological conditions.
        Algorithm could classify clinically important abnormalities on chest radiographs at a performance level comparable to practicing radiologists.
      </div>

      <div>
        
      </div>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
