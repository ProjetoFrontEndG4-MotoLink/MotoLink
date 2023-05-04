import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  font-family: inherit;

  input {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    padding: 0.9375rem;
    color: var(--brand-3);

    :focus {
      border: 2px solid var(--brand-1);
      box-shadow: 0px 2px 2px 2px rgba(255, 208, 41, 0.1);
    }

    :read-only {
      border: 2px solid var(--grey-3);
      background-color: var(--grey-4);
      color: var(--grey-3);
    }
  }

  .disabled {
    border: 1px solid var(--brand-4);
    font-weight: var(--weight-3);
    background-color: var(--brand-4);
    color: #985006;
  }

  label {
    background-color: var(--whiteFixed);
    position: absolute;
    top: -5px;
    left: 12px;
    padding: 0px 5px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    line-height: 0.5rem;
    color: var(--grey-1);
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;

    height: fit-content;
    width: fit-content;

    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: var(--whiteFixed);
    font-size: 1rem;
  }

  .error {
    padding-top: 5px;
    color: var(--error);
    font-size: var(--text-3);
  }
`;
