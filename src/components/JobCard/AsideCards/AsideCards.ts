import styled from "styled-components";

export const AsideCardTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: var(--border-Radius);
  width: 100%;

  padding: 20px;
  background-color: var(--whiteFixed);

  h4 {
    color: var(--brand-3);
    font-size: var(--text-1);
  }

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
`;
