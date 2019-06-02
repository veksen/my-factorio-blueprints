import React, { useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import * as SC from "./styles"

interface CheckboxProps {
  filterType: string
  text: string
  name: string
}

export function Checkbox({ text, name, filterType }: CheckboxProps): JSX.Element {
  const [checked, setChecked] = useState(false)
  const { actions: searchActions } = useSearch()

  function toggleChecked(): void {
    setChecked(prevState => !prevState)

    if (filterType === "STATE") {
      searchActions.toggleStateFilter(name)
    }

    if (filterType === "TYPE") {
      searchActions.toggleTypeFilter(name)
    }
  }

  return (
    <SC.CheckboxWrapper onClick={toggleChecked}>
      <SC.Square checked={checked} />
      <SC.Text>{text}</SC.Text>
    </SC.CheckboxWrapper>
  )
}
