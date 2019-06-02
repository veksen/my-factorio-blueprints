import React from "react"
import * as SC from "./styles"

interface ContentProps {
  children: React.ReactNode
}

export function Content(props: ContentProps): JSX.Element {
  return <SC.ContentWrapper>{props.children}</SC.ContentWrapper>
}
