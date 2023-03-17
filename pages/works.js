import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import epital from '../public/images/works/epital_rca.png'
import sberHealth from '../public/images/works/sberhealth_01.png'
import medPal from '../public/images/works/medpal_01.png'
import thumbLudi from '../public/images/works/xray-image.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={.1}>
          <WorkGridItem id="epital" title="Epital" thumbnail={epital}>
            Telemedicine platform for patients with Chronic Obstructive Pulmonary Disease (COPD)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="docdoc" title="DocDoc" thumbnail={sberHealth}>      
            Telemedicine platform for medical consultation with the clinician
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="medpal" title="MedPal" thumbnail={medPal}>
            Healthcare Bot for determining health conditions, based on the user input, with the follow up suggestions of an appropriate treatment
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem id="ludi" title="LuDi" thumbnail={thumbLudi}>
            Development a deep learning models for medical image interpretation. A Lung Diagnosis deep learning model for the task of chest x-ray classification as well as the development of a model for segmenting tumors in MRIs
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
