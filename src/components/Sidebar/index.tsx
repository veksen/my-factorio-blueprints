import React from "react"
import * as SC from "./styles"

interface SidebarProps {
  children: React.ReactNode
}

export function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <SC.SidebarWrapper>
      <SC.SidebarContent>{props.children}</SC.SidebarContent>
      <SC.SidebarBG />
    </SC.SidebarWrapper>
  )
}
