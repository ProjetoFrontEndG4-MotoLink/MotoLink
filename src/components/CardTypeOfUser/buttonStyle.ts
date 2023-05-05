import styled from "styled-components";

export const TypeOfUserCard = styled.button`
  width: 140px;
  min-height: 100%;
  padding: 10px;

  background-color: transparent;
  border: 1.5px solid var(--brand-3);
  border-radius: var(--border-Radius);

  img {
    width: 45px;
    height: auto;
  }

  .textCard {
    font-size: var(--text-3);
    font-weight: var(--weight-3);
    color: var(--grey-1);
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 165px;
    height: 161px;

    background-color: transparent;

    border: 1.5px solid var(--brand-3);
    border-radius: var(--border-Radius);

    .textCard {
      font-size: var(--text-2);
      font-weight: var(--weight-3);
      color: var(--grey-1);
    }

    :hover {
      background-color: var(--brand-1);
      border: 1.5px solid var(--brand-1);
      transition: 1s;
    }
  }
`;
