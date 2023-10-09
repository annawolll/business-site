import { PropsWithChildren } from 'react'
import { combineProviders } from 'react-combine-providers'

import { I18nProvider } from './I18nProvider'
import { ThemeProvider } from './ThemeProvider'

const AppProviders = ({ children }: PropsWithChildren<unknown>) => {
  const providers = combineProviders()

  providers.push(I18nProvider)
  providers.push(ThemeProvider)

  const MasterProvider = providers.master()

  return <MasterProvider>{children}</MasterProvider>
}

export default AppProviders

