import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --brand-1: #FFD029
        --brand-2: #FFDD66;
        --brand-3: #1C1D01
    }

    button {
        cursor: pointer;
    }

`