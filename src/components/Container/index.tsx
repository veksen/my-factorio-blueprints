import React from "react"
import * as SC from "./styles"

export interface ContainerProps {
  children: React.ReactNode
  direction?: "row" | "column"
}

export function Container({ children, direction = "row" }: ContainerProps): JSX.Element {
  return <SC.ContainerWrapper direction={direction}>{children}</SC.ContainerWrapper>
}
