import styled from "styled-components";

// Options Container
export const SchemeOptionsContainer = styled.section`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SchemeModeWrapper = styled.div`
  padding: 1.35rem;
  background-color: #6495ed;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  color: #fefefe;
  border: 3px solid #a1a1a1a5;
`;

export const SchemeModeLabel = styled.label`
    margin-right: 1rem;
`

export const SchemeModeSelect = styled.select`
    padding: .5rem;
    border: none;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
`

export const ButtonContainer = styled.div`
  margin: 1rem;
`;

export const Button = styled.button`
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  padding: 1.35rem;
  border: 3px solid #a1a1a1a5;
  background-color: #6495ed;
  color: #fefefe;
  cursor: pointer;
  flex: 3;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    background-color: #3a77e6;
    transform: scale(1.05);
  }
`;

// Color Scheme Elements
export const ColorSchemeContainer = styled.div`
  ${"" /* position: relative; */}
  height: 100%;
`;

export const ColorSchemeWrapper = styled.div`
  height: calc(100% - 200px);
  width: 100%;
  position: absolute;
`;

export const ColorWrapper = styled.div`
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  place-items: center;
  box-shadow: 1rem 1rem 20px #000;
`;

export const ColorName = styled.h4`
  font-family: "Dancing Script", sans-serif;
  font-size: 1.75rem;

  color: ${(props) => (props.colorIsDark ? "white" : "black")};
`;
