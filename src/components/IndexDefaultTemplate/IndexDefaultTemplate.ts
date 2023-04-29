import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  height: 100%;

  .fullWidth {
    width: 100%;
  }

  .header__login {
    height: 60px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 27px;
  }

  .logo__column1 {
    align-self: start;
    height: 136px;
    width: auto;
  }

  .column1 {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 20px;

    background-color: var(--brand-1);

    .column1__Content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      width: 32.68rem;

      .logo__column1 {
        width: 130px;
        height: auto;
      }
    }

    .detail {
      width: 64px;
      height: 6px;
      background-color: var(--brand-4);
    }
  }

  .column2 {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100%;

    .formContainer {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-self: center;
      width: 29.68rem;

      .registerRedirect__Container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          text-align: center;
        }
      }
    }
  }

  .padding__default {
    padding: 20px;
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
`;
