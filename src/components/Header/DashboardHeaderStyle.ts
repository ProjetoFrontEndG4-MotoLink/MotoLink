import styled from "styled-components";

export const DashboardHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--brand-1);

  width: 100%;
  max-width: 100%;
  padding: 20px;

  box-shadow: 0px 2px 8px 2px rgba(40, 51, 0, 0.1);

  .buttonsContainer {
    display: flex;
    gap: 10px;
  }
`;
