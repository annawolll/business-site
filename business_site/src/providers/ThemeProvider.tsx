import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { PropsWithChildren } from 'react'

import { appTheme } from 'themes'

const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <EmotionThemeProvider theme={appTheme}>
      <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider }
