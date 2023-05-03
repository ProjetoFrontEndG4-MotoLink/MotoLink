import styled from "styled-components";

export const AsideStyle = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;

  box-sizing: border-box;
  width: 280px;
  background-color: var(--grey-4);
  border-radius: var(--border-Radius);
  padding: 25px 20px;

  height: 400px;

  ul {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-right: 10px;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: var(--brand-2);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-1);
      border-radius: 10px;
    }
  }
`;
