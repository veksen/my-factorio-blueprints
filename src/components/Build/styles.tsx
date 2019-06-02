import styled from "styled-components"

export const BuildWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 8px;

  & + & {
    margin-top: 8px;
  }
`

export const Title = styled.h2`
  margin: 0;
  color: #424242;
  font-weight: 700;
  font-size: 20px;
`

export const State = styled.div`
  margin-top: 4px;
  font-size: 16px;
  color: 424242;
`

export const Categories = styled.div`
  margin-top: 4px;
  display: flex;
`

export const Category = styled.div`
  background: #424242;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  border-radius: 3px;
  padding: 4px;

  & + & {
    margin-left: 4px;
  }
`
