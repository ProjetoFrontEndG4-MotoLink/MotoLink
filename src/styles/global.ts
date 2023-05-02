import styled, { createGlobalStyle } from "styled-components";

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
    
    .App{
        max-width: 100%;
        min-height: 100vh;
    }

    :root {
        --brand-1: #FFD029;
        --brand-2: #FFDD66;
        --brand-3: #0F1001;
        --brand-4: #FF8200;
        --brand-4-shadow: #E27606;

        --grey-1: #3D3D3D;
        --grey-2:  #636363;
        --grey-3: #888888;
        --grey-4: #F2F7F2;
        --grey-5: #F4F2F2;
        --whiteFixed: #FFFFFF;

        --sucess: #3FE864;
        --error: #E83F5B;
        
        --title-1:  2.813rem; /* 45px */
        --title-1-mobile: 1.56rem; /* 45px */
        --title-2: 1.5rem; /* 24px */
        --title-3: 1.25rem; /* 20px */
        --text-1: 1.125rem; /* 18px */
        --text-2: 1rem; /* 16px */
        --text-3: .938rem; /* 15px */

        --weight-1: 900;
        --weight-2: 800;
        --weight-3: 700;
        --weight-4: 400;

        --border-Radius: 5px;
    }

    h1 {
        font-size: var( --title-1);
        font-weight: var(--weight-1);
        color: var(--brand-3);
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

    .textDefaultBold {
        font-size: var(--text-1);
        font-weight: var(--weight-3);
        color: var(--grey-1);
    }

    .textSmall {
        align-self: center;
        font-size: var(--text-3);
        font-weight: var(--weight-4);
        color: var(--grey-1);

        a {
            color: inherit;
        }
    }

    .textSmallBold {
        font-size: var(--text-3);
        font-weight: var(--weight-3);
        color: var(--grey-1);
    }

    button {
        cursor: pointer;

        a{
            color: inherit;
        }
    }

    @media (max-width: 425px) {
        :root {
            --title-1: 1.56rem;
        }
    }

    @media (min-width: 1024px) {
        .container {
            width: 1180px;
            max-width: 100%;
            margin: 0 auto;
        }

        .container__left {
            width: 100%;
        }

        .container_right {
            width: 280px;
        }

    }
`

export const ModalContainer = styled.div`
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;

    align-items: center;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    position: absolute;
`
