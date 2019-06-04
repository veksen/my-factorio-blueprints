import gql from "graphql-tag"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-apollo-hooks"
import { BuildI } from "./types"

interface DataProviderProps {
  children: React.ReactNode
}

export interface DataContextInterface {
  state: {
    builds: BuildI[]
  }
  actions: {
    init: (initialBuilds: BuildI[]) => void
  }
}

export const DataContext = React.createContext<DataContextInterface | null>(null)

const GET_BUILDS = gql`
  query {
    builds {
      id
      name
      blueprint
      state
      categories {
        category {
          key
          name
        }
      }
    }
  }
`

export function DataProvider({ children }: DataProviderProps): JSX.Element {
  const { data } = useQuery(GET_BUILDS)
  const [builds, setBuilds] = useState<BuildI[]>([])

  useEffect(() => {
    if (data.builds) {
      // flattening categories to make them easier to filter
      init(data.builds.map((b: any) => ({ ...b, categories: b.categories.map(({ category }: any) => category.key) })))
    }
  }, [data])

  function init(initialBuilds: BuildI[]): void {
    setBuilds(initialBuilds)
  }

  return (
    <DataContext.Provider
      value={{
        state: {
          builds
        },
        actions: {
          init
        }
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
