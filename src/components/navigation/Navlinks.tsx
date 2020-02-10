/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { NavLink } from '@theme-ui/components'
import { Link } from 'react-router-dom'
import { MdHome, MdAccountBalanceWallet } from 'react-icons/md'
export default function Navlinks() {
  return (
    <Flex
      as="nav"
      sx={{
        flexDirection: 'column',
        py: 4,
      }}
    >
      <NavLink as={Link} to="/" px={4}>
        <MdHome />
        Home
      </NavLink>

      <NavLink as={Link} to="/wallet" px={4}>
        <MdAccountBalanceWallet /> Wallet
      </NavLink>
    </Flex>
  )
}
