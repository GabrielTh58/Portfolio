import styled from 'styled-components';

export const HomeWrapper = styled.section`
  padding: 50px 0;
  min-height: 86vh;
  width: 100vw;
`;

export const HomeText = styled.div`
  letter-spacing: 2px;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  font-family: var(--secondary-font);
  font-size: var(--large-font-size);

  @media (max-width: 1280px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    padding: 0 var(--mobile-padding);
  }

  p {
    margin-bottom: 10px;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  h2 {    
    letter-spacing: 2px;
    margin-bottom: 30px;
    color: var(--secondary-color);
  }

  h1,h2{
    @media(max-width: 500px) {
      font-size: 2.3rem;
    }
  }
`

export const HomeImg = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;

  @media (max-width: 1280px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    padding: 0 var(--mobile-padding);
    margin-top: 50px;
  }
`;

export const ImageBox = styled.div`
    max-width: 450px;  
    margin: auto;
    border-radius: 50%;
    box-shadow:  inset 3px 3px 3px #222327, inset -3px -3px 3px var(--primary-color);

    img {
      width: 100%;
      border-radius: 50%;
      border: 10px solid transparent;
    }
`