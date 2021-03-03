import React from 'react';
import Loader from "react-loader-spinner";
import styled from 'styled-components'

const BoxLoader = styled.div`
  margin: 50px auto;
  padding: 52px 48px;
  width: 1024px;
  min-height: 800px;
  display:flex;
  justify-content:center;
  align-items:center;
`

function LoaderS() {
  return (
  <BoxLoader>
      <Loader
    type="Puff"
    color="#00BFFF"
    height={300}
    width={300}
  />
  </BoxLoader>
  );
}

export default LoaderS;