import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import React from "react"
import { ApolloProvider } from "react-apollo-hooks"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://my-factorio-blueprints.herokuapp.com/v1/graphql" }),
  cache: new InMemoryCache()
})

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<AppWrapper />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
