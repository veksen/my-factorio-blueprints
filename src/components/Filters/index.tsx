import React from "react"
import { Checkbox } from "../Checkbox"
import * as SC from "./styles"

export function Filters(): JSX.Element {
  return (
    <SC.FiltersWrapper>
      filter builds
      <Checkbox filterType="STATE" name="EARLY_GAME" text="Early-game" />
      <Checkbox filterType="STATE" name="MID_GAME" text="Mid-game" />
      <Checkbox filterType="STATE" name="LATE_GAME" text="Late-game" />
      <SC.Separator />
      <Checkbox filterType="CATEGORY" name="BALANCER" text="Balancer" />
      <Checkbox filterType="CATEGORY" name="SMELTING" text="Smelting" />
      <Checkbox filterType="CATEGORY" name="TRAINS" text="Trains" />
      <Checkbox filterType="CATEGORY" name="PRODUCTION" text="Production" />
    </SC.FiltersWrapper>
  )
}
