import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;

  .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: flex-end;

    .b-container {
      width: 80%;
    }

    &__btn {
      width: 100px;
      margin-right: 10px;
    }
  }
`;
