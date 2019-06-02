import React, { useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import { Category, FilterType, State } from "../../types"
import * as SC from "./styles"

interface CheckboxProps {
  filterType: FilterType
  text: string
  name: State | Category
}

export function Checkbox({ text, name, filterType }: CheckboxProps): JSX.Element {
  const [checked, setChecked] = useState(false)
  const { actions: searchActions } = useSearch()

  function toggleChecked(): void {
    setChecked(prevState => !prevState)

    if (filterType === "STATE") {
      searchActions.toggleStateFilter(name as State)
    }

    if (filterType === "CATEGORY") {
      searchActions.toggleCategoryFilter(name as Category)
    }
  }

  return (
    <SC.CheckboxWrapper onClick={toggleChecked}>
      <SC.Square checked={checked} />
      <SC.Text>{text}</SC.Text>
    </SC.CheckboxWrapper>
  )
}
