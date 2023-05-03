import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;

  .main__column1 {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .JobsListContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        padding: 40px;
        text-align: center;
      }

      .JobsListContainer__header {
        h2 {
          text-align: center;
        }

        display: flex;
        justify-content: space-between;
        gap: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;

    .main__column1 {
      gap: 40px;
    }

    .JobsListContainer__header {
      flex-direction: row;

      button {
        display: inline;
      }
    }
  }
`;
