/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Grid, Flex, Image, Heading } from '@theme-ui/components'

import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import logo from 'assets/logo.svg'
const SUBSCRIPTION = gql`
  subscription myAccount($account_name: String) {
    accounts(where: { account_name: { _eq: $account_name } }) {
      account_name
      is_proxy
      balances {
        amount
        contract
        currency
        decimals
      }
      rexbal {
        matured_rex
        rex_balance
        rex_maturities
        vote_stake
      }
      permissions {
        perm_name
        threshold
        keys {
          key
          weight
        }
        accounts {
          actor
          weight
        }
      }
    }
  }
`

export default function DemoComponent() {
  const { data } = useSubscription(SUBSCRIPTION, { variables: { account_name: 'dreamstackio' } })

  return (
    <div>
      <Flex bg="primary" p={2}>
        <Heading as="h3" p={3} color="background">
          React Started
        </Heading>
      </Flex>
      <Grid gap={2} columns={[1, 2, 2]} px={0} py={0}>
        <div
          sx={{
            display: 'flex',
            minHeight: 256,
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={logo} variant="quarter" />
        </div>
        <div
          sx={{
            display: 'flex',
            minHeight: 256,
            bg: 'muted',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heading as="h1" color="primary">
            TELOS{' '}
            <span
              sx={{
                fontFamily: 'Source Sans Pro',
                fontWeight: 'body',
              }}
            >
              Dreamstack
            </span>
          </Heading>
        </div>
      </Grid>
      <Styled.pre>{JSON.stringify(data, null, 2)}</Styled.pre>
    </div>
  )
}
