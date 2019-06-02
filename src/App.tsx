import React from "react"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Filters } from "./components/Filters"
import { Header } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { Sidebar } from "./components/Sidebar"
import { DataProvider } from "./DataProvider"
import { SearchProvider } from "./SearchProvider"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <SearchProvider>
          <DataProvider>
            <Sidebar>
              <SearchInput />
              <Filters />
            </Sidebar>
            <Content />
          </DataProvider>
        </SearchProvider>
      </Container>
    </div>
  )
}

export default App
