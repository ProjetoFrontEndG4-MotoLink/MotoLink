import styled from "styled-components";

export const DropDownMenuTemplate = styled.div`
  display: block;
  position: absolute;
  top: 97px;
  left: 0;

  width: 100%;

  background-color: red;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: var(--whiteFixed);
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 10px;

      font-size: var(--text-2);
      font-weight: var(--weight-3);
    }

    li:hover {
      background-color: var(--brand-4);
    }

    li:not(:last-child) {
      border-bottom: 1px solid var(--grey-4);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
