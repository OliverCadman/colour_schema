import styled from 'styled-components';
import { device } from '../../styled_utils/devices';

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NavLogo = styled.h1` {
    margin: 1rem 0.5rem;
    font-family: "Dancing Script", sans-serif;
    text-shadow: .3rem .4rem 20px #888888;
    font-size: 2rem;

    @media ${device.laptop} {
        font-size: 3.5rem;
    }
}`