import { SectionOpener } from 'components/SectionOpener/SectionOpener'
import { useTranslation } from 'react-i18next'
import * as Styled from './ContactSection.styles'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <Styled.ContactSectionContainer>
      <SectionOpener title={t('navbar.contact')} icon="/Phone.svg" />
      <Styled.ContactSectionWrapper>
        <Styled.ContactInfo>
          <Styled.ContactInfoItem>+48 999 999 999</Styled.ContactInfoItem>
          <Styled.ContactInfoItem>
            Pracownia Fizjoterapii | Gliwice ul. Basztowa 11
          </Styled.ContactInfoItem>
          <Styled.ContactInfoItem>jolanta.wuda@gabinet.pl</Styled.ContactInfoItem>
        </Styled.ContactInfo>
      </Styled.ContactSectionWrapper>
    </Styled.ContactSectionContainer>
  )
}
