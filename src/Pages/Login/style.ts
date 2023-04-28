import styled from "styled-components";

export const StyledLoginPage = styled.div`
    
    .padding__default {
        padding: 20px;
    }

    .header__login {
        height: 82px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 27px;
    }

    .logo__motoLink {
        width: 63px;
        height: auto;
    }

    @media (min-width: 1024px) {
        .header__login {
            display: none;
        }

        .padding__default {
            padding: 0px;
        }
    }
`