import React from "react"
import { Build } from "../../DataProvider"
import { useData } from "../../hooks/useData"
import { useSearch } from "../../hooks/useSearch"
import * as SC from "./styles"

export function Content(): JSX.Element {
  const { state: searchState } = useSearch()
  const { state: dataState } = useData()

  function filteredBuilds(
    state: { input: string; stateFilters: string[]; typeFilters: string[] },
    builds: Build[]
  ): Build[] {
    const { input: search, stateFilters, typeFilters } = state

    if (!search && !stateFilters.length && !typeFilters.length) {
      return builds
    }

    return builds
      .filter(build => build.name.includes(search))
      .filter(build => {
        if (!stateFilters.length) {
          return build
        }

        return stateFilters.includes(build.state)
      })
      .filter(build => {
        if (!typeFilters.length) {
          return build
        }

        return build.categories.some(category => {
          return typeFilters.includes(category)
        })
      })
  }

  return (
    <SC.ContentWrapper>
      {filteredBuilds(searchState, dataState.builds).map(build => (
        <div key={build.name}>
          {build.name} - {build.categories.join(", ")}
        </div>
      ))}
    </SC.ContentWrapper>
  )
}
