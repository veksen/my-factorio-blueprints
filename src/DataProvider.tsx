import React, { useState } from "react"

interface DataProviderProps {
  children: React.ReactNode
}

type State = "EARLY_GAME" | "MID_GAME" | "LATE_GAME"

export interface Build {
  blueprint: string
  name: string
  state: State
  categories: string[]
}

const defaultBuilds: Build[] = [
  { name: "build1", blueprint: "adadwadwadwdaw", state: "EARLY_GAME", categories: ["BALANCER"] },
  { name: "build2", blueprint: "asdf", state: "LATE_GAME", categories: ["SMELTING"] }
]

export interface DataContextInterface {
  state: {
    builds: Build[]
  }
  actions: {
    init: (initialBuilds: Build[]) => void
  }
}

export const DataContext = React.createContext<DataContextInterface | null>(null)

export function DataProvider({ children }: DataProviderProps): JSX.Element {
  const [builds, setBuilds] = useState<Build[]>(defaultBuilds)

  function init(initialBuilds: Build[]): void {
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
