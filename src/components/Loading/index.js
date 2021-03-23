import React from 'react';
import { BoxLoader } from './styles'
import Loader from "react-loader-spinner";

function Loading() {
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

export default Loading;