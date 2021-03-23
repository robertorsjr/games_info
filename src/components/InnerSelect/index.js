import React from 'react';
import { Options, PlatformFont } from './styles'

function InnerSelect({showInner, onMouseOut, platforms, setSelectedPlatform}) {
  return (
    <Options show={showInner} onMouseLeave={onMouseOut}>
      { platforms.map((platform, index) => <PlatformFont onClick={() => setSelectedPlatform(platform)} key={index} value={index}>{platform.name}</PlatformFont> ) }
    </Options>
  )
}

export default InnerSelect;