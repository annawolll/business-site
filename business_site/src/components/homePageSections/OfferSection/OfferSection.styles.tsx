import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const SectionText = styled(Typography)`
  ${({ theme }) => css`
    font-size: 16px;
  `}
  max-width: 700px;
  text-align: center;
`

const OfferSectionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.palette.background.paper};
    align-items: center;
    padding: ${theme.spacing(7)};
    gap: ${theme.spacing(4)};
  `}
`

export { SectionText, OfferSectionContainer }
