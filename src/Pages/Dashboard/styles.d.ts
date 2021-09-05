import styled from "styled-components";

export const Dashboard = styled.main`
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .m-container {
    margin-top: 30px;
    height: 50vh;
    display: flex;
    justify-content: center;

    &__form {
      margin-top: 20px;
      width: 400px;
      display: flex;
      flex-direction: column;

      &__input {
        margin-top: 10px;
      }
    }
  }
`;
