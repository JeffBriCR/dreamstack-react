/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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
  const { data } = useSubscription(SUBSCRIPTION, { variables: { account_name: 'dreamstackio0-01-29' } })

  return <Styled.pre>{JSON.stringify(data, null, 2)}</Styled.pre>
}
