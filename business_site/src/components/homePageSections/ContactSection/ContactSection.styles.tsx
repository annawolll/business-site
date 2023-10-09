import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const ContactSectionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(2)};
    padding-top: ${theme.spacing(4)};
  `}
`

const ContactSectionWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(5)} ${theme.spacing(20)};
    background-color: ${theme.palette.background.paper};
    width: 100%;
  `}
`

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContactInfoItem = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    font-size: 16px;
  `}
`

export { ContactSectionContainer, ContactInfo, ContactInfoItem, ContactSectionWrapper }
