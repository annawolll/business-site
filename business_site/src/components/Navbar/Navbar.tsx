import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import * as Styled from './Navbar.styles'
import { NAVIGATION_ITEMS } from './navigationItems'
import { PhoneOutlined } from '@mui/icons-material'

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <Styled.AppBar position="sticky" elevation={0}>
      <Styled.ContainerNavbar>
        <Typography variant="h1" fontFamily="Roboto">
          Pracownia Fizjoterapii
        </Typography>
        <Styled.ContainerNavbarCenter>
          {NAVIGATION_ITEMS.map(item => (
            <Styled.NavigationItems>{t(item.text).toLocaleUpperCase()}</Styled.NavigationItems>
          ))}
        </Styled.ContainerNavbarCenter>
        <Styled.ContainerNavbarRight>
          <PhoneOutlined />
          <Typography variant="h1" fontFamily="Roboto">
            +48 934 321 345
          </Typography>
        </Styled.ContainerNavbarRight>
      </Styled.ContainerNavbar>
    </Styled.AppBar>
  )
}
