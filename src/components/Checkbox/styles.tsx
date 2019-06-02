import styled from "styled-components"

export const Square = styled.div<{ checked: boolean }>`
  box-sizing: border-box;
  background: ${props => (props.checked ? "#8FCD5B !important" : "#fff")};
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin: 16px 0;

  &:hover ${Square} {
    background: #c7e6ad;
  }
`

export const Text = styled.div`
  margin-left: 16px;
`
