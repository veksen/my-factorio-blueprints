import React from "react"
import { useData } from "../../hooks/useData"
import { useSearch } from "../../hooks/useSearch"
import { Build } from "../../types"
import * as SC from "./styles"

export function Content(): JSX.Element {
  const { state: searchState } = useSearch()
  const { state: dataState } = useData()

  function filteredBuilds(
    state: { input: string; stateFilters: string[]; categoryFilters: string[] },
    builds: Build[]
  ): Build[] {
    const { input: search, stateFilters, categoryFilters } = state

    if (!search && !stateFilters.length && !categoryFilters.length) {
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
        if (!categoryFilters.length) {
          return build
        }

        return build.categories.some(category => {
          return categoryFilters.includes(category)
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
