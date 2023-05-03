import styled from "styled-components";

export const ModalContainer = styled.dialog`
  width: 95%;
  height: fit-content;
  background-color: var(--whiteFixed);

  border-radius: var(--border-Radius);

  padding: 20px;

  .buttons__container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    h2 {
      color: var(--brand-3);
    }

    button {
      background-color: transparent;
      border: none;
      font-size: var(--title-2);
      font-weight: var(--weight-4);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }

  .modalBackdrop {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;

    align-items: center;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    position: absolute;
  }
`;
