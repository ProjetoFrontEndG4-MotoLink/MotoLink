import styled, { css } from "styled-components";

interface IStyledButtonProps {
  buttonSize: "default" | "medium";
  buttonStyle: "orange" | "grey" | "yellow" | "lightGrey";
}

export const ButtonDefault = styled.button<IStyledButtonProps>`
  color: var(--whiteFixed);
  border-radius: 5px;
  font-size: var(--text-1);
  font-weight: var(--weight-3);

  .fullWidth {
    width: 100%;
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 20px;
          height: 64px;
        `;
      case "medium":
        return css`
          padding: 20px;
          height: 40px;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "orange":
        return css`
          background-color: var(--brand-4);
        `;
      case "grey":
        return css`
          background-color: var(--brand-3);
        `;
      case "yellow":
        return css`
          background-color: var(--brand-1);
        `;
      case "lightGrey":
        return css`
          background-color: var(--grey-2);
        `;
    }
  }}
`;
