import '@/src/styles/globals.css'

import { graphQLClient, ClientContext } from '@/src/gql/client'

function App({ Component, pageProps }) {
  return (
    <ClientContext.Provider value={graphQLClient}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  )
}

export default App
