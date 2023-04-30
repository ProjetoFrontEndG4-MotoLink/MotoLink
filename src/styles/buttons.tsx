import styled, { css } from "styled-components";

interface IStyledButtonProps {
  buttonSize: "default" | "medium";
  buttonStyle: "orange" | "grey" | "yellow" | "lightGrey";
}

export const ButtonDefault = styled.button<IStyledButtonProps>`
  color: var(--whiteFixed);
  height: fit-content;
  border-radius: 5px;
  font-size: var(--text-1);
  font-weight: var(--weight-3);
  border: 2px solid var(--brand-3);

  .fullWidth {
    width: 100%;
  }

  img {
    width: 24px;
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 20px;
          height: 60px;
        `;
      case "medium":
        return css`
          display: flex;
          align-items: center;
          font-size: var(--text-2);
          padding: 0px 20px;
          height: 40px;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "orange":
        return css`
          background-color: var(--brand-4);
          border: 2px solid var(--brand-4);

          :hover {
            border: 2px solid var(--brand-4-shadow);
            background-color: var(--brand-4-shadow);
          }
        `;
      case "grey":
        return css`
          background-color: var(--brand-3);
          border: 2px solid var(--brand-3);

          :hover {
            border: 2px solid var(--grey-1);
            background-color: var(--grey-1);
          }
        `;
      case "yellow":
        return css`
          background-color: var(--brand-1);
          border: 2px solid var(--brand-1);
        `;
      case "lightGrey":
        return css`
          background-color: var(--grey-2);
          border: 2px solid var(--grey-2);
        `;
    }
  }}
`;
