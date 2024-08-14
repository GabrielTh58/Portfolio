import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const FooterWrapper = styled.footer`
    width: 100vw;
    margin-top: 7rem;
    text-align: center;

    h2{
        font-family: var(--secondary-font);
        font-size: var(--normal-font);
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }
`

export const ContainerFooter = styled(Container)`
    padding: 5rem 0;
    border-top: 2px solid transparent;
    border-image: linear-gradient(to right, transparent, var(--secondary-color), transparent) 1;
`