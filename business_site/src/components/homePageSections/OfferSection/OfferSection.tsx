import { SectionOpener } from 'components/SectionOpener/SectionOpener'
import { useTranslation } from 'react-i18next'
import * as Styled from './OfferSection.styles'

export default function OfferSection() {
  const { t } = useTranslation()
  return (
    <Styled.OfferSectionContainer>
      <SectionOpener title={t('navbar.offer')} icon="/Offer.svg" />
      <Styled.SectionText>{t('offer')}</Styled.SectionText>
    </Styled.OfferSectionContainer>
  )
}
