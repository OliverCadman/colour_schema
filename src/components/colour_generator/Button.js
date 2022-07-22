import React from "react";
import { StyledButton } from "./Wrapper.styles";

const Button = ({ content, dynamicFunction }) => {
  return <StyledButton onClick={dynamicFunction}>{content}</StyledButton>;
};

export default Button;
