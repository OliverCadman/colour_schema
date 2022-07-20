import styled from 'styled-components';

export const ColorSchemeContainer = styled.div `
    ${'' /* position: relative; */}
    height: 100%;
`

export const ColorSchemeWrapper = styled.div `
   height: calc(100% - 100px);
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
    box-shadow: 1rem 1rem 20px #000;
`

export const ColorName = styled.h4 `
    font-family: 'Dancing Script', sans-serif;
    font-size: 1.75rem;

    color: ${props => props.colorIsDark ? 'white' : 'black'}
`

