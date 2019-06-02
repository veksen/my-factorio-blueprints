import React, { useState } from "react"

interface SearchProviderProps {
  children: React.ReactNode
}

export interface SearchContextInterface {
  state: {
    input: string
    stateFilters: string[]
    typeFilters: string[]
  }
  actions: {
    update: (value: string) => void
    toggleStateFilter: (name: string) => void
    toggleTypeFilter: (name: string) => void
  }
}

export const SearchContext = React.createContext<SearchContextInterface | null>(null)

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [input, setInput] = useState("")
  const [stateFilters, setStateFilters] = useState<string[]>([])
  const [typeFilters, setTypeFilters] = useState<string[]>([])

  const update = (value: string): void => {
    setInput(value)
  }

  const setFilters = (state: string[], name: string): string[] => {
    if (state.includes(name)) {
      return state.filter(f => f !== name)
    }

    return [...state, name]
  }

  const toggleStateFilter = (name: string): void => {
    setStateFilters(prevState => setFilters(prevState, name))
  }

  const toggleTypeFilter = (name: string): void => {
    setTypeFilters(prevState => setFilters(prevState, name))
  }

  return (
    <SearchContext.Provider
      value={{
        state: {
          input,
          stateFilters,
          typeFilters
        },
        actions: {
          update,
          toggleStateFilter,
          toggleTypeFilter
        }
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
