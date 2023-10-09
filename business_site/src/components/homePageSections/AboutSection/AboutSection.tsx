import { Grid } from '@mui/material'
import { SectionOpener } from 'components/SectionOpener/SectionOpener'
import { useTranslation } from 'react-i18next'
import * as Styled from './AboutSection.styles'

export default function AboutSection() {
  const { t } = useTranslation()
  return (
    <Styled.AboutSectionContainer>
      <SectionOpener title={t('navbar.about')} icon="/Person.svg" />
      <Grid container rowSpacing={2} columnSpacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Styled.SubsectionContainer>
            <Styled.RoundedIconContainer>
              <img src="Experience.svg" />
            </Styled.RoundedIconContainer>
            <Styled.TextContainer>
              <Styled.Subtitle>{t('about.experience')}</Styled.Subtitle>
              <Styled.SectionText>{t('about.experienceText')}</Styled.SectionText>
            </Styled.TextContainer>
          </Styled.SubsectionContainer>
        </Grid>

        <Grid item xs={6}>
          <Styled.SubsectionContainer>
            <Styled.RoundedIconContainer>
              <img src="Education.svg" />
            </Styled.RoundedIconContainer>
            <Styled.TextContainer>
              <Styled.Subtitle>{t('about.education')}</Styled.Subtitle>
              <Styled.SectionText>{t('about.educationText')}</Styled.SectionText>
            </Styled.TextContainer>
          </Styled.SubsectionContainer>
        </Grid>

        <Grid item xs={6}>
          <Styled.SubsectionContainer>
            <Styled.RoundedIconContainer>
              <img src="Patients.svg" />
            </Styled.RoundedIconContainer>
            <Styled.TextContainer>
              <Styled.Subtitle>{t('about.patientSatisfaction')}</Styled.Subtitle>
              <Styled.SectionText>{t('about.patientSatisfactionText')}</Styled.SectionText>
            </Styled.TextContainer>
          </Styled.SubsectionContainer>
        </Grid>

        <Grid item xs={6}>
          <Styled.SubsectionContainer>
            <Styled.RoundedIconContainer>
              <img src="Training.svg" />
            </Styled.RoundedIconContainer>
            <Styled.TextContainer>
              <Styled.Subtitle>{t('about.customExercises')}</Styled.Subtitle>
              <Styled.SectionText>{t('about.customExercisesText')}</Styled.SectionText>
            </Styled.TextContainer>
          </Styled.SubsectionContainer>
        </Grid>
      </Grid>
    </Styled.AboutSectionContainer>
  )
}
