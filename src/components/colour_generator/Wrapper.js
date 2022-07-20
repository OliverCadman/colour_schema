import React, { useState } from "react";
import { useFetch } from "../../hooks/fetch";
import { randomHexGenerator } from "../../utils/functions";
import { ColorSchemeWrapper, ColorSchemeContainer } from "./Wrapper.styles";
import Colour from "./Colour";
import { divideByCount } from "../../utils/functions";

// Get a random hex value to use as query param in API call.
const randomHex = randomHexGenerator();
const schemeURL = `https://www.thecolorapi.com/scheme?hex=${randomHex}`;

const Wrapper = () => {
    const {loading, state: scheme} = useFetch(schemeURL);
    console.log(scheme);

    // Used to create dynamic positioning of color divs
    // Divide 100 by count to get even distribution of divs.
    let count = 0;
    return (
      <ColorSchemeContainer>
        <ColorSchemeWrapper>
          {scheme.colors &&
            scheme.colors.map((color, index) => {
              if (index !== 0) {
                count += 20
              }
              const {
                hex: { value: hexName, clean },
                name: { value },
              } = color;
              return <Colour key={clean} color={hexName} name={value} left={count} />;
            })}
        </ColorSchemeWrapper>
      </ColorSchemeContainer>
    );

};

export default Wrapper;
