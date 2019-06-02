import React from "react"
import { useData } from "../../hooks/useData"
import { useSearch } from "../../hooks/useSearch"
import { BuildI } from "../../types"
import { Build } from "../Build"
import * as SC from "./styles"

export function Content(): JSX.Element {
  const { state: searchState } = useSearch()
  const { state: dataState } = useData()

  function filteredBuilds(
    state: { input: string; stateFilters: string[]; categoryFilters: string[] },
    builds: BuildI[]
  ): BuildI[] {
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

  const buildsToDisplay = filteredBuilds(searchState, dataState.builds)

  return (
    <SC.ContentWrapper>
      <SC.Count>
        Displaying {buildsToDisplay.length} out of {dataState.builds.length} builds
      </SC.Count>

      {buildsToDisplay.map(build => (
        <Build key={build.name} build={build} />
      ))}
    </SC.ContentWrapper>
  )
}
