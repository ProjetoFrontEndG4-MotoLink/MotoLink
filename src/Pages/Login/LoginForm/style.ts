import styled from "styled-components";
import { AnimationFadeIn2 } from "../../../styles/animations";

export const StyledForm = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  animation: ${AnimationFadeIn2} 1s ease;

  h3 {
    align-self: center;
  }

  form {
    width: 100%;
    display: flex;
    align-self: center;
    gap: 20px;
    flex-direction: column;
  }
`;
