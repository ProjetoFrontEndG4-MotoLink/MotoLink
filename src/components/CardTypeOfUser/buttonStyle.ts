import styled from "styled-components";

export const TypeOfUserCard = styled.button`
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
`;
