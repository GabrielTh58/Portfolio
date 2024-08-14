import styled from 'styled-components'
import { OuterShadow } from '../../styles/GlobalStyles'

export const ImgProfile = styled.img`
    transition: 0.6s ease-in-out;
    box-shadow: ${OuterShadow};
    
    &:hover {
        box-shadow: 3px 3px var(--primary-color), -3px -3px 3px var(--primary-color);
    }
`