import React, { useState } from "react"

interface SearchProviderProps {
  children: React.ReactNode
}

export interface SearchContextInterface {
  state: {
    input: string
    stateFilters: string[]
    categoryFilters: string[]
  }
  actions: {
    update: (value: string) => void
    toggleStateFilter: (name: string) => void
    toggleCategoryFilter: (name: string) => void
  }
}

export const SearchContext = React.createContext<SearchContextInterface | null>(null)

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [input, setInput] = useState("")
  const [stateFilters, setStateFilters] = useState<string[]>([])
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])

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

  const toggleCategoryFilter = (name: string): void => {
    setCategoryFilters(prevState => setFilters(prevState, name))
  }

  return (
    <SearchContext.Provider
      value={{
        state: {
          input,
          stateFilters,
          categoryFilters
        },
        actions: {
          update,
          toggleStateFilter,
          toggleCategoryFilter
        }
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
