import styled from "styled-components";

export const Auth = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 20;
  transition: all 100ms linear;

  .form {
    position: absolute;
    right: 20px;
    top: 100px;
    width: 250px;
    margin: 10px;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 31;
    &__input {
      margin-top: 10px;
    }
  }
`;
