/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import { Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'routes/Home'
import Wallet from 'routes/Wallet'

function App() {
  return (
    <AppProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wallet" component={Wallet} />
        </Switch>
      </Layout>
    </AppProvider>
  )
}

export default App
