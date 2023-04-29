import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  min-height: 100vh;

  .fullWidth {
    width: 100%;
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
    min-height: 100vh;
    padding: 20px;

    background-color: var(--brand-1);

    img {
      max-width: 100%;
    }

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
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    width: 50%;
    min-height: 100vh;

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

  .optionsContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 380px;

    .titleOptionsContainer {
      font-size: 1.75rem;
      font-weight: var(--weight-3);
      color: var(--grey-2);

      span {
        color: var(--brand-1);
        font-weight: var(--weight-2);
      }
    }

    .optionsCard__container {
      display: flex;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: fit-content;

    .header__login {
      position: absolute;

      box-sizing: border-box;
      top: 0;
      height: 60px;
      width: 100%;
      background-color: var(--whiteFixed);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 27px;
      padding: 20px;

      img {
        height: 27px;
      }
    }

    .column1 {
      width: 100%;
      height: fit-content;
      padding: 60px 20px 60px;

      .column1__Content img {
        max-width: 90%;
      }
    }

    .column2 {
      width: 100%;
      height: fit-content;
      padding: 100px 20px 40px;

      .optionsContainer {
        align-self: center;
        max-width: 90%;
      }
    }
  }

  @media (min-width: 768px) {
    .header__login {
      display: none;
    }
  }
`;
