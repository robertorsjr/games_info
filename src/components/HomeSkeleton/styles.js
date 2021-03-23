import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto;
  width: 70%;
  height: 250px;
  background-color: #161618;
`

export const SkeletonImage = styled.div`
  width: 260px;
  height: 210px;
  background-color: #1E2127;
  margin-left: 20px;
`

export const Column = styled.div``;

export const SkeletonItem = styled.div`
  height: 30px;
  width: ${({width}) => width}px;
  background-color: #1E2127;
  margin: 20px;
`
