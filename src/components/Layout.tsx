/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRef, useState } from 'react'
import { OneOrMoreChildren } from 'types'
import { motion } from 'framer-motion'
import { MenuButton } from '@theme-ui/components'

const sideVariants = {
  open: { width: 280 },
  closed: { width: 40 },
}
export default function Layout({ children }: OneOrMoreChildren) {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef(null)
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: ['wrap', 'nowrap', 'nowrap', 'nowrap'],
        flexDirection: ['column', 'row', 'row', 'row'],
      }}
    >
      <motion.aside
        ref={containerRef}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sideVariants}
        sx={{
          flexGrow: 1,
          flexBasis: 'sidebar',
          bg: 'dark',
          height: ['auto', '100vh'],
          minWidth: ['100vw', 'auto', 'auto', 'auto'],
        }}
      >
        <MenuButton
          onClick={() => setOpen(!isOpen)}
          sx={{
            float: 'right',
          }}
          aria-label="Toggle Menu"
        />
      </motion.aside>
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
