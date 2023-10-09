import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const RoundedIconContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210px;
    height: 210px;
    background-color: ${theme.palette.secondary.main};
  `}
`

const Subtitle = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    font-size: 24px;
  `}
`

const SectionText = styled(Typography)`
  font-size: 15px;
`

const SubsectionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(5)};
  `}
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  align-items: end;
  text-align: right;
`

const AboutSectionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing(4)};
  `}
`

export {
  RoundedIconContainer,
  Subtitle,
  SectionText,
  SubsectionContainer,
  TextContainer,
  AboutSectionContainer,
}
