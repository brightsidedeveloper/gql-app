import { Environment, Network, FetchFunction } from 'relay-runtime'

const HTTP_ENDPOINT = 'http://192.168.86.119:8080/query'

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: request.text, variables }),
  })

  if (!resp.ok) {
    throw new Error('Response failed.')
  }

  return await resp.json()
}

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
})
