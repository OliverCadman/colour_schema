import styled from 'styled-components';

export const ColorSchemeContainer = styled.div `
    ${'' /* position: relative; */}
    height: calc(100% - 56px);
`

export const ColorSchemeWrapper = styled.div `
   height: 100%;
   width: 100%;
   position: absolute;
`

export const ColorWrapper = styled.div `
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: grid;
    place-items: center;
`

export const ColorName = styled.h4 `
    font-family: 'Dancing Script', sans-serif;
    font-size: 1.75rem;
`

