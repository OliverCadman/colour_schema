import React, { useEffect, useRef } from "react";
import { StyledPopover } from "./Wrapper.styles";
import "../../index.css";
import { Transition } from "react-transition-group";

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Popover = ({ location, cssCopied, in: inProp }) => {
  const popoverRef = useRef();

  useEffect(() => {
    const popover = popoverRef.current;
    const { center, bottom } = location;
    popover.style.left = `${center}px`;
    popover.style.top = `${bottom}px`;
  }, [location]);

  return (
    <Transition in={inProp}>
      {(state) => (
        <StyledPopover cssCopied={cssCopied}
        ref={popoverRef}
        style={{
            ...defaultStyle,
            ...transitionStyles[state]
        }}>
          COPIED
        </StyledPopover>
      )}
    </Transition>
  );
};

export default Popover;
