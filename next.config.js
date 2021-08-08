module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
    WS: process.env.NODE_ENV === 'production' ? '' : 'ws://localhost:4000/graphql'
  }
}
