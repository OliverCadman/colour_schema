import React, { useState } from "react";
import { useFetch } from "../../hooks/fetch";
import { randomHexGenerator } from "../../utils/functions";
import { ColorSchemeWrapper, ColorSchemeContainer } from "./Wrapper.styles";
import Colour from "./Colour";
import { isColorDark } from "../../utils/functions";

// Get a random hex value to use as query param in API call.
const randomHex = randomHexGenerator();
const schemeURL = `https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=analogic-complement`;

const Wrapper = () => {
  const { loading, state: scheme } = useFetch(schemeURL);

  // Used to create dynamic positioning of color divs
  // Increment 20 to count in map method below.
  let count = 0;
  return (
    <ColorSchemeContainer>
      <ColorSchemeWrapper>
        {scheme.colors &&
          scheme.colors.map((color, index) => {
            const {
              hex: { value: hexName, clean },
              name: { value },
            } = color;

            const colorIsDark = isColorDark(hexName);

            if (index !== 0) {
              count += 20;
            }
            return (
              <Colour key={clean}
              color={hexName}
              name={value}
              left={count}
              colorIsDark={colorIsDark} />
            );
          })}
      </ColorSchemeWrapper>
    </ColorSchemeContainer>
  );
};

export default Wrapper;
