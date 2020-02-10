/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import Layout from 'components/Layout'
import Home from 'routes/Home'

function App() {
  return (
    <div>
      <AppProvider>
        <Layout>
          <Home />
        </Layout>
      </AppProvider>
    </div>
  )
}

export default App
