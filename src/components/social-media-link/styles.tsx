import styled from "styled-components";
import { OuterShadow } from "../../styles/GlobalStyles";

export const SocialLinksContainer = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};

  @media(max-width: 1280px) { 
    justify-content: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
    text-align: center;
    color: var(--white-color);
    margin: 0 4px;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: ${OuterShadow};

    &:hover {
      color: var(--primary-color);
    }
  }
`;
