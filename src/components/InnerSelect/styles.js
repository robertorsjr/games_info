import styled from 'styled-components';

export const PlatformFont = styled.div`
  font-family:'Noto Sans';
  font-size:15px;
  color:white;
  margin: 10px 0;
  cursor: pointer;
`
export const Options = styled.div`
  padding: 26px;
  display: ${({show}) => show ? 'block' : 'none'};
  position: relative;
  float: right;
  background-color: #161618;
  width: 175px;
  font-family: 'Noto Sans';
  border-radius: 20px;
  color:white;
  left: 200px;
  top: -50px;
  z-index:999;
  border: 1px solid #333333;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`