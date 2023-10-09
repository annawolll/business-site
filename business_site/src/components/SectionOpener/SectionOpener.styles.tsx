import { css } from '@emotion/react'
import styled from '@emotion/styled'

const SectionOpenerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(5)};
    align-items: center;
  `}
`
const IconWithTitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(1)};
  `}
`

const HorizontalLine = styled.div`
  ${({ theme }) => css`
    border-bottom: 3px solid ${theme.palette.primary.main};
    width: 150px;
  `}
`

const SectionTitle = styled(Typography)`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.palette.primary.main};
  `}
`

export { SectionOpenerContainer, HorizontalLine, IconWithTitleContainer, SectionTitle }
