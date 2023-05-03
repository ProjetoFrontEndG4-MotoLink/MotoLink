import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  .modalBody {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 95%;
    height: fit-content;
    background-color: var(--whiteFixed);

    border: none;

    border-radius: var(--border-Radius);
    padding: 25px 20px;

    .modal__header {
      width: 100%;
      display: flex;
      justify-content: space-between;

      img {
        width: 18px;
      }
    }

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
  }
`;
