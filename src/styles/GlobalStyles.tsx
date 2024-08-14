import styled, { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { variables } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}

  html {
    font-size: 62.5%;
    color: var(--white-color);
    font-weight: 300;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--dark-background-color);
    font-family: var(--primary-color);
    font-size: var(--normal-font-size);
  }
  
  .outer-shadow {
    box-shadow: 3px 3px var(--primary-color), -3px -3px 3px #454545;
  }
  
  .inner-shadow {
    box-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #454545;
  }
`

export const InnerShadow = `
  inset 3px 3px 3px #222327, inset -3px -3px 3px #454545;
`

export const OuterShadow = `
  3px 3px var(--primary-color), -3px -3px 3px #454545;
`

export  const DefaultShadowEffect = `
  3px 3px 3px rgba(0, 0, 0, 0.8), 
  -3px -3px 3px rgba(0, 21, 147, 0.6),
  0 0 15px rgba(0, 21, 147, 0.4), 
  0 0 20px rgba(0, 21, 147, 0.2);
`

export const DefaultHoverShadowEffect = `
  3px 3px var(--primary-color), -3px -3px 3px var(--primary-color);
`

export const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`
  
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
  
export const AlignItemsCenter = styled(Row)`
  align-items: center;
`
  
export const VerticalAlignRow = styled(Row)`
  align-items: center;
`
  
export const Section = styled.section`
  padding: 7rem 0 7rem;
`
  
export const ContainerWithSection = styled(Container)`
  padding: 7rem 0 7rem;
`
  
export const SectionHeading = styled.div`
  text-align: center;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 60px 0;
  border-top: 2px solid transparent;
  border-image: linear-gradient(to right, transparent, var(--secondary-color), transparent) 1;

  
  h2{
    font-size: var(--giant-font-size);
    font-weight: 500;
    text-transform: uppercase;
  }
`
export const IconBase = `
  font-size: 5rem;
  margin-inline: 30px;
  transition: ease-in-out 0.3s;

  &:hover {
    color: var(--cor-primaria);
    cursor: pointer;
  }
`




