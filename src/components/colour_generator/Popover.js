import React, { useState, useEffect, useRef } from "react";
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
  exited: { opacity: 0 },
};

const Popover = ({ location, cssCopied, in: inProp, isExploding }) => {
   const [popoverDimensions, setPopoverDimensions] = useState({});

  const popoverRef = useRef();
  
  // Position popover directly below 'Copy to Clipboard' button.
  useEffect(() => {
    const popover = popoverRef.current;
    const { center, bottom } = location;
    popover.style.left = `${center}px`;
    popover.style.top = `${bottom}px`;

  }, [location]);


  return (
    <Transition in={inProp} timeout={500} nodeRef={popoverRef}>
      {(state) => (
        <StyledPopover
        ref={popoverRef}
          cssCopied={cssCopied}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <p>CSS Copied!</p>
        </StyledPopover>
      )}
    </Transition>
  );
};

export default Popover;
