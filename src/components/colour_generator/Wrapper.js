import React, { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/fetch";
import { getSchemeURL, randomHexGenerator } from "../../utils/functions";
import {
  ColorSchemeWrapper,
  ColorSchemeContainer,
  SchemeOptionsContainer,
  SchemeModeWrapper,
  SchemeModeLabel,
  SchemeModeSelect,
  Button,
  ButtonContainer,
} from "./Wrapper.styles";
import Colour from "./Colour";
import { isColorDark } from "../../utils/functions";

// Get a random hex value to use as query param in API call.
let randomHex = randomHexGenerator();
let schemeURL = getSchemeURL(randomHex);

const schemeModes = [
  "triad",
  "quad",
  "analogic",
  "complement",
  "analogic-complement",
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
];

const Wrapper = () => {
  const [{ loading, state: scheme }, getItems] = useFetch(schemeURL);
  const [schemeMode, setSchemeMode] = useState("");
  const buttonRef = useRef();

  // onClick handler generates a new color palette
  const getMoreColors = (e) => {
    e.preventDefault();
    randomHex = randomHexGenerator();
    schemeURL = getSchemeURL(randomHex, schemeMode);
        getItems(schemeURL);
    buttonRef.current.focus();
  };

  // Toggle background of button when clicked.
  const toggleButtonStyle = (state) => {
    if (state === "mousedown") {
      buttonRef.current.style.backgroundColor = "#3a77e6";
    } else {
      buttonRef.current.style.backgroundColor = "#6495ed";
    }
  };

  useEffect(() => {
    document.title = "Color Schema";
  }, [])

  // Used to create dynamic positioning of color divs
  // Increment 20 to count in map method below.
  let count = 0;
  return (
    <ColorSchemeContainer>
      <SchemeOptionsContainer>
        <form
          onSubmit={getMoreColors}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SchemeModeWrapper>
            <SchemeModeLabel htmlFor="mode">Name your mode:</SchemeModeLabel>
            <SchemeModeSelect
              id="mode"
              onChange={(e) => {
                setSchemeMode(e.target.value);
              }}
            >
              {schemeModes.map((mode, index) => {
                return (
                  <option value={mode} key={index}>
                    {mode}
                  </option>
                );
              })}
            </SchemeModeSelect>
          </SchemeModeWrapper>
          <ButtonContainer>
            <Button
              ref={buttonRef}
              onMouseDown={() => toggleButtonStyle("mousedown")}
              onMouseUp={() => toggleButtonStyle("mouseup")}
            >
              Generate New Palette
            </Button>
          </ButtonContainer>
        </form>
      </SchemeOptionsContainer>
      <section>
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
                <Colour
                  key={clean}
                  color={hexName}
                  name={value}
                  left={count}
                  colorIsDark={colorIsDark}
                />
              );
            })}
        </ColorSchemeWrapper>
      </section>
    </ColorSchemeContainer>
  );
};

export default Wrapper;
