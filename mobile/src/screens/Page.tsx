import { memo } from 'react'
import { Text, View } from 'react-native'
import { graphql, useLazyLoadQuery } from 'react-relay'
import type { PageQuery } from './__generated__/PageQuery.graphql'

function Page() {
  const query = useLazyLoadQuery<PageQuery>(
    graphql`
      query PageQuery {
        users {
          id
          name
        }
      }
    `,
    {}
  )

  return (
    <View>
      <Text>{query.users.map((user) => user.name).join(', ')}</Text>
    </View>
  )
}

export default memo(Page)
