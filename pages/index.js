import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, /*EmailIcon*/ DownloadIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
       Hello, I&apos;m an medical engineer with passion for user-centered design and development
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nijat Mcmudow
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <div>
          Nijat is a Copenhagen based medical engineer with focus on crafting innovative, 
          user-centered & efficacious healthcare systems. 
          He is a freelance and a full-stack developer based in Copenhagen, who is passionate about 
          developing cost effective and practical solutions for the modern healthcare by combining
          bioinformatics and artificial intelligence.
        
          Nijat has a knack for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera (Sony A7III). Currently, he is relocated to the small monastery in Japan, just 20-minutes
          from the downtown area of Okayama, where he works on his product, practices zen-meditation and hiding from all the information
          noise and distortion which has lately wreak havoc on humankind.
        </div>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2011</BioYear>
          Graduated from Hilleroed Gymnasium (Denmark)
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed engineering degree in Medical Technology and Physiology at Technical University of Denmark - DTU
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Worked at Codan
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Worked at Epital
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked as a freelancer
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Consultant in healthcare technology industry
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <div>
          Art, Music, Playing Guitar, Hiking, Photography, Reading
        </div>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1TQjW7wHm3oXcOKSRbJE0SEAP56vJnRpm/view?usp=share_link" passHref scroll={false}>
            <Button rightIcon={<DownloadIcon />} colorScheme="teal" >
              My CV
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nmakhmudov" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @nmakhmudow
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/nmakh3101" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @nmakhmudow
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nmakh3101/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @nmakhmudow
              </Button>
            </Link>
          </ListItem>
        </List>


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
