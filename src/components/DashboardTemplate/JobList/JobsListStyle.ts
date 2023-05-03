import styled from "styled-components";

export const JobListStyle = styled.ul`
  list-style: none;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
