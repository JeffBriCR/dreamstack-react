/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRef, useState } from 'react'
import { OneOrMoreChildren } from 'types'
import { motion } from 'framer-motion'
import { MenuButton } from '@theme-ui/components'
import { useBreakpointIndex } from '@theme-ui/match-media'

const sideVariants = {
  open: { width: 280 },
  closed: { width: 40 },
}
const topVariants = {
  open: { height: 150 },
  closed: { height: 40 },
}
const transition = {
  x: { type: 'spring', stiffness: 400 },
  opacity: { ease: 'easeIn' },
}
export default function Layout({ children }: OneOrMoreChildren) {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef(null)
  const breakPointIndex = useBreakpointIndex()

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
        transition={transition}
        variants={breakPointIndex !== 0 ? sideVariants : topVariants}
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
