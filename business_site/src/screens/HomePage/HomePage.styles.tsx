import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const ImageSectionWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`

const CompanyNameBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    padding: 130px 20px 15px 15px;
    background-color: ${theme.palette.secondary.main};
    flex-grow: 1;
  `}
`

const CompanyName = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    font-size: 48px;
  `}
`

export { ImageSectionWrapper, CompanyNameBox, CompanyName }
