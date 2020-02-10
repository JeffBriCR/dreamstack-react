/** @jsx jsx */
import { jsx } from 'theme-ui'
import { OneOrMoreChildren } from 'types'
import Navbar from 'components/navigation/Navbar'

export default function Layout({ children }: OneOrMoreChildren) {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: ['wrap', 'nowrap', 'nowrap', 'nowrap'],
        flexDirection: ['column', 'row', 'row', 'row'],
      }}
    >
      <Navbar />
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320,
        }}
      >
        {children}
      </main>
    </div>
  )
}
