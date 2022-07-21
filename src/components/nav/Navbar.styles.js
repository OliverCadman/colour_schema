import styled from 'styled-components';
import { device } from '../../styled_utils/devices';
import img from "../../assets/images/color-splash-banner.jpg"

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &:after{
    content: "";
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const NavLogo = styled.h1` {
    margin: 1rem 0.5rem;
    font-family: "Dancing Script", sans-serif;
    text-shadow: 0.5rem 0.3rem 40px #fefefe;
    font-size: 2rem;
    color: #fafafa;

    @media ${device.laptop} {
        font-size: 3.5rem;
    }
}`