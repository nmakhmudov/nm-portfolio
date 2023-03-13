import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SberHealth (DocDoc)">
    <Container>
      <Title>
        SberHealth (DocDoc) <Badge>2019-2020</Badge>
      </Title>
      <div>
      The main task of DocDoc is to make the process of making an 
      appointment with a doctor as transparent, convenient and fast as possible, 
      so that people can receive high—quality medical care at any time. The business had 
      a solid customer growth rate until year 2013-2017, however after the Sberbanks acquisition 
      of DocDoc, the growth rate started to decline. My job was to identyfy what caused increased
      customer churn as well as the decrease in the customer retention rate.
      which caused the customer churn and increase the customer acquisition rate.
      By the end of 2020, we managed to increase our customer acquisition rate compared to a year
      earlier, by 7%.

      </div>
      <div>
      As of June 2022 - 4,668,700 appointments were made with the help of the SberHealth. 
      </div>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
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
          <span>Java, Python, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>React, Express, RavenJS, NuxtJS, VueJS, CoreJS, DayJS, PreactJS, SocketIO, HammerJS</span>
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
        <WorkImage src="/images/works/sberhealth_02.png" alt="sberhealth" />
        <WorkImage src="/images/works/sberhealth_03.png" alt="sberhealth" />
        <WorkImage src="/images/works/sberhealth_04.png" alt="sberhealth" />
        <WorkImage src="/images/works/sberhealth_05.png" alt="sberhealth" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
