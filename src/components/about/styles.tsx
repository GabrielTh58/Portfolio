import styled from 'styled-components';
import { InnerShadow } from '../../styles/GlobalStyles';

export const AboutWrapper = styled.section`
    padding: 0 15px;
    width: 100vw;
`

export const ProfileImageWrapper = styled.div`
    max-width: 40%;
    padding: 0 15px;

    @media(max-width: 1280px) {
        max-width: 100%;
        padding: 0 var(--mobile-padding);
        margin-bottom: 50px;
    }

    img {
        border: 10px solid transparent;
        border-radius: 5px;
    }
`

export const ImageContainer = styled.div`
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    box-shadow: ${InnerShadow};
`

export const AboutInfo = styled.div`
    max-width: 60%;
    padding: 0 25px;   
    align-self: center;

    @media(max-width: 1280px) {
        padding: 0 var(--mobile-padding);
        text-align: center;
    }

    @media(max-width:768px){
        max-width: 100%;                   
    }

    strong{
        color: var(--secondary-color);
        margin-right: 5px;
    }

    p {
        font-size: 1.8rem;
        font-weight: 300;
        margin-bottom: 20px;
    }
`
