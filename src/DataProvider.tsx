import React, { useState } from "react"
import { BuildI } from "./types"

interface DataProviderProps {
  children: React.ReactNode
}

const defaultBuilds: BuildI[] = [
  { name: "build1", blueprint: "adadwadwadwdaw", state: "EARLY_GAME", categories: ["BALANCER"] },
  { name: "build2", blueprint: "asdf", state: "LATE_GAME", categories: ["SMELTING"] }
]

export interface DataContextInterface {
  state: {
    builds: BuildI[]
  }
  actions: {
    init: (initialBuilds: BuildI[]) => void
  }
}

export const DataContext = React.createContext<DataContextInterface | null>(null)

export function DataProvider({ children }: DataProviderProps): JSX.Element {
  const [builds, setBuilds] = useState<BuildI[]>(defaultBuilds)

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
