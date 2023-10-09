import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { AppBar, Typography } from '@mui/material'

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => css`
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    background-color: ${theme.palette.background.default};
  `}
`

const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 80px;
`

const ContainerNavbarRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    align-items: center;
  `}
`

const ContainerNavbarCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`

const NavigationItems = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    font-family: 'Roboto';
  `}
`

// const NavbarItems = styled(Typography)`
//   ${({ theme }) => css`
//     font-size: 15px;
//     color: ${theme.palette.secondary.contrastText};
//     cursor: pointer;
//     padding: 20px;

//     ${theme.breakpoints.down('md')} {
//       padding: 0px;
//     }
//   `}
// `

// const StyledDrawer = styled(Drawer)`
//   ${({ theme }) => css`
//     width: '100%';
//     & .MuiDrawer-paper {
//       margin-top: 80px;
//       width: 100%;
//       box-sizing: border-box;
//       background-color: ${theme.palette.primary.main};
//       color: ${theme.palette.secondary.contrastText};
//     }
//   `}
// `

// const LogoAndNameMobileContainer = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap: ${theme.spacing(2)};
//   `}
// `

export {
  StyledAppBar as AppBar,
  //   ContainerNavbar,
  ContainerNavbar,
  ContainerNavbarRight,
  ContainerNavbarCenter,
  NavigationItems,
  //   IconButtonWhite,
  //   LogoPolsl,
  //   NavbarItems,
  //   StyledDrawer as Drawer,
  //   LogoAndNameMobileContainer,
}
