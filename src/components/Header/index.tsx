import React from "react"
import { Container } from "../Container"
import * as SC from "./styles"

export function Header(): JSX.Element {
  return (
    <SC.HeaderWrapper>
      <Container>my blueprints</Container>
    </SC.HeaderWrapper>
  )
}
