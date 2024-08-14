import styled from "styled-components";
import { OuterShadow, DefaultHoverShadowEffect } from "../../styles/GlobalStyles";

export const CvButton = styled.div`
    margin-top: 50px;
    a{
        font-size: var(--large-font-size);
        padding: 10px 20px;
        border-radius: 20px;
        transition: all 0.3s ease;
        box-shadow: ${OuterShadow};

        &:hover {
            box-shadow: ${DefaultHoverShadowEffect}
        }
    }
`

