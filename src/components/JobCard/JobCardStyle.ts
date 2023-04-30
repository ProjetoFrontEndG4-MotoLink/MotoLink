import styled from "styled-components";

export const CardTemplate = styled.div`
  width: 280px;
  max-width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-Radius) var(--border-Radius) 0px 0px;
    height: 56px;
    width: 100%;

    background-color: var(--brand-3);
    color: var(--whiteFixed);

    font-size: var(--text-1);
  }

  .Card__Info--default {
    border-radius: 0px 0px var(--border-Radius) var(--border-Radius);

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 25px 35px;
    background-color: var(--grey-5);

    .Card__Info__Detail {
      h5 {
        color: var(--grey-2);
        font-size: var(--text-3);
        font-weight: var(--weight-3);
      }
      p {
        color: var(--grey-1);
        font-size: var(--text-2);
        font-weight: var(--weight-4);
      }
    }
  }
`;
