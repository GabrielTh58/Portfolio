import styled from "styled-components";

interface ArrowBtnProps {
    isDisabled?: boolean;
}

export const ArrowBtn = styled.button<ArrowBtnProps>`
    background-color: var(--dark-background-color);
    color: var(--primary-color);
    border: none;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;

    @media(max-width: 500px) {
        padding: 0;
    }
    
    svg {   
        font-size: var(--extra-large-font-size);
        cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
        opacity: ${props => props.isDisabled ? '0.3' : '1'};

        @media(max-width: 500px) {
            margin: 0;
        }   

        &:hover {
            color: var(--white-color);
            transform: scale(1.1);
        }
    }  
`
