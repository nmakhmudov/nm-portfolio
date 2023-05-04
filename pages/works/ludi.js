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
        Epital <Badge>2011-2016</Badge>
      </Title>
      <div>
        A Danish Telemedicine Platform for people with chronic obstructive pulmonary disease (COPD). 

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
          <span>Tornado, Flask, Ember, JQuery, Angular, D3</span>
        </ListItem>
        <ListItem>
          <Meta>Web Platform</Meta>
          <span>AWS, Google App Engine</span>
        </ListItem>
        <ListItem>
          <Meta>Database/Caching</Meta>
          <span>MongoDB, Redis, Nginx</span>
        </ListItem>
        <ListItem>
          <Meta>Server Management</Meta>
          <span>Docker</span>
        </ListItem>
        <ListItem>
          <Meta>Protocols</Meta>
          <span>TCP, FreeTDS</span>
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
