import React from 'react';
import { ColorWrapper } from './Wrapper.styles';
import { ColorName } from './Wrapper.styles';

const Colour = ({color, name, left, colorIsDark }) => {  
    console.log(left);
  return (
    <ColorWrapper style={{backgroundColor: color, width: "20%", left: `${left}%`}}>
        <ColorName colorIsDark={colorIsDark}>{name}</ColorName>
    </ColorWrapper>
  )
}

export default Colour