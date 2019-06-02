import { useContext } from "react"
import { DataContext, DataContextInterface } from "../DataProvider"

export function useData(): DataContextInterface {
  const dataContext = useContext(DataContext)

  if (!dataContext) {
    throw Error("Need context")
  }

  return dataContext
}
