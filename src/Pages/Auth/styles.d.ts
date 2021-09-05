import styled from "styled-components";

export const Auth = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .form {
    width: 250px;
    display: flex;
    flex-direction: column;

    &__input {
      margin-bottom: 10px;
    }
  }
`;
