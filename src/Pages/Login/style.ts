import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  height: 100%;

  .header__login {
    height: 82px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 27px;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 50%;
    height: 100%;
    padding: 20px 60px;

    background-color: var(--brand-1);

    .detail {
      width: 64px;
      height: 4px;
      background-color: var(--brand-4);
    }

    .logo__motoLink {
      width: 136px;
      height: auto;
    }
  }

  .column2 {
    display: flex;
    width: 50%;
    justify-content: center;

    .formContainer {
      align-self: center;
      width: 70%;
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
