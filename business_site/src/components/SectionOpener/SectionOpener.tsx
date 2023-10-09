import * as Styled from './SectionOpener.styles'

interface SectionOpenerProps {
  icon: string
  title: string
}

export const SectionOpener = ({ icon, title }: SectionOpenerProps) => {
  return (
    <Styled.SectionOpenerContainer>
      <Styled.HorizontalLine />
      <Styled.IconWithTitleContainer>
        <img src={icon} width="50px" />
        <Styled.SectionTitle>{title}</Styled.SectionTitle>
      </Styled.IconWithTitleContainer>
      <Styled.HorizontalLine />
    </Styled.SectionOpenerContainer>
  )
}
