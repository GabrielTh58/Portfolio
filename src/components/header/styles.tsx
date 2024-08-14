import styled from 'styled-components';
import { VerticalAlignRow, DefaultShadowEffect } from '../../styles/GlobalStyles';

export const HeaderWrapper = styled.header`
  padding: 30px 15px;
  width: 100vw;

  @media (max-width: 1280px) {
    padding: var(--mobile-padding);
  }
`

export const MenuHeader = styled(VerticalAlignRow)`
  box-shadow: ${DefaultShadowEffect};
  border-bottom-right-radius: 5px;
  padding: 15px;
  justify-content: space-between;
`

export const Logo = styled.h1`
  font-family: var(--secondary-color);
  font-size: var(--extra-large-font-size);
  color: var(--white-color);
  border: 2px solid var(--white-color);
  border-radius: 50%;
  width: 65px;
  height: 65px;
  line-height: 55px;
  text-align: center;
  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    box-shadow: 0 0 5px rgba(0, 21, 147, 0.7), 0 0 10px rgba(0, 61, 153, 0.5), 0 0 15px rgba(0, 183, 255, 0.4);
  }
`


