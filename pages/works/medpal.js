import {
  Box,
  SimpleGrid,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        MedPal<Badge>2022</Badge>
      </Title>
      <div>
        Healthcare bot developed specifically to accomodate users' needs with regards to determining his/hers health condition based on the input of observed symptoms. 
        When user confirms suggested condition, MedPal suggests the necessary treatment needed to combat desease or disorder.
        The AI behind the treatment suggestion is developed upon collaborative filtering algorithm (CFT). 
        MedPal can act as the medication reminder as well, by sending you the corresponding message when it's time to take your pills.
         
      </div>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Telegram</Meta>
          <Link href="https://sberhealth.ru">
          https://sberhealth.ru <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>Java, Python</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>AIOGram</span>
        </ListItem>
        <ListItem>
          <Meta>Web Server</Meta>
          <span>Nuxt JS</span>
        </ListItem>
        <ListItem>
          <Meta>Database/Caching</Meta>
          <span>Nginx</span>
        </ListItem>
        <ListItem>
          <Meta>Server Management</Meta>
          <span>Docker</span>
        </ListItem>
        <ListItem>
          <Meta>Protocols</Meta>
          <span>TCP</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2} >
        <WorkImage src="/images/works/medpal_02.png" alt="medpal" />
        <WorkImage src="/images/works/medpal_03.png" alt="medpal" />
        <WorkImage src="/images/works/medpal_04.png" alt="medpal" />
        <WorkImage src="/images/works/medpal_05.png" alt="medpal" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
