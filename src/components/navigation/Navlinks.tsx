/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { NavLink } from '@theme-ui/components'
import { Link } from 'react-router-dom'
import { MdHome, MdAccountBalanceWallet } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

export default function Navlinks() {
  const { t } = useTranslation(['navbar'])
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
        {t('home')}
      </NavLink>

      <NavLink as={Link} to="/wallet" px={4}>
        <MdAccountBalanceWallet /> {t('wallet')}
      </NavLink>
    </Flex>
  )
}
