/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { theme } from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { TransitProvider } from '@blockmatic/eosio-hooks'
import { transitConfig } from 'config/transit'
import { OneOrMoreChildren } from 'types'

import GraphQLProvider from 'components/GraphQLProvider'

import { I18nextProvider } from 'react-i18next'
import i18n from 'config/i18n'

export default function AppProvider({ children }: OneOrMoreChildren) {
  return (
    <GraphQLProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <TransitProvider config={transitConfig}>{children}</TransitProvider>
          </I18nextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GraphQLProvider>
  )
}
