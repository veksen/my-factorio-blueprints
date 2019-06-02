import React from "react"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar>abc</Sidebar>
        <Content>def</Content>
      </Container>
    </div>
  )
}

export default App
