import React from "react"
import { BuildI, State } from "../../types"
import * as SC from "./styles"

export interface BuildProps {
  build: BuildI
}

export function Build({ build }: BuildProps): JSX.Element {
  function humanState(state: State): string {
    return state.replace("_", " ")
  }

  return (
    <SC.BuildWrapper>
      <SC.Title>{build.name}</SC.Title>
      <SC.State>{humanState(build.state)}</SC.State>
      <SC.Categories>
        {build.categories.map(category => (
          <SC.Category>{category}</SC.Category>
        ))}
      </SC.Categories>
    </SC.BuildWrapper>
  )
}
