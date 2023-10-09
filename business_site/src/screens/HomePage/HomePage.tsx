import { Navbar } from 'components/Navbar/Navbar'
import * as Styled from './HomePage.styles'
import AboutSection from 'components/homePageSections/AboutSection/AboutSection'
import OfferSection from 'components/homePageSections/OfferSection/OfferSection'
import ContactSection from 'components/homePageSections/ContactSection/ContactSection'

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Styled.ImageSectionWrapper>
        <Styled.CompanyNameBox>
          <div>
            <Styled.CompanyName>Jolanta Wuda</Styled.CompanyName>
            <Styled.CompanyName>Fizjoterapia</Styled.CompanyName>
          </div>
        </Styled.CompanyNameBox>
        <img src="/physiotherapy.png" height="500px" width="800px" />
      </Styled.ImageSectionWrapper>
      <AboutSection />
      <OfferSection />
      <ContactSection />
    </>
  )
}
