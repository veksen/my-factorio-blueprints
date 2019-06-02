import styled from "styled-components"
import { ContainerProps } from "./"

export const ContainerWrapper = styled.div<ContainerProps>`
  max-width: calc(100% - 20px * 2);
  width: calc(1366px + 20px * 2);
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  flex: 1;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
`
