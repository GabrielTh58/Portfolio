
import { css } from 'styled-components';

export const reset = css`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: var(--cor-branca);
    }

    ul{
        list-style: none;
    }

    img{
        max-width: 100%;
    }
`