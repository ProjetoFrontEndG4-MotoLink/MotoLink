import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        height: 100vh;
    }

    .App{
        width: 100vw;
        height: 100vh;
    }

    :root {
        --brand-1: #FFD029;
        --brand-2: #FFDD66;
        --brand-3: #1C1D01;
        --brand-4: #FF8200;

        --grey-1: #3D3D3D;
        --grey-2:  #636363;
        --grey-3: #888888;
        --grey-4: #F4F2F2;
        --whiteFixed: #FFFFFF;

        --sucess: #3FE864;
        --error: #E83F5B;
        
        --title-1:  2.813rem; /* 45px */
        --title-2: 1.5rem; /* 24px */
        --title-3: 1.25rem; /* 20px */
        --text-1: 1.125rem; /* 18px */
        --text-2: 1rem; /* 16px */
        --text-3: .938rem; /* 15px */

        --weight-1: 900;
        --weight-2: 800;
        --weight-3: 700;
        --weight-4: 400;
    }

    

    h1 {
        font-size: var( --title-1);
        font-weight: var(--weight-1);
        color: var(--grey-1);
    }

    h2 {
        font-size: var( --title-2);
        font-weight: var(--weight-2);
        color: var(--grey-1); 
    }

    h3 {
        font-size: var( --title-3);
        font-weight: var(--weight-3);
        color: var(--grey-1);
    }

    .textDefault {
        font-size: var(--text-1);
        font-weight: var(--weight-4);
        color: var(--grey-1);
    }

    button {
        cursor: pointer;
    }

    

    @media (min-width: 1024px) {
        .container {
            width: 1180px;
            margin: 0 auto;
        }

        .container__left {
            width: 100%;
        }

        .container_right {
            width: 280px;
        }
    }

`;
