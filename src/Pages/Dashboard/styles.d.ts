import styled from "styled-components";

export const Dashboard = styled.main`
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .m-container {
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &__form {
      margin-top: 20px;
      width: 500px;
      display: flex;
      height: 80vh;
      flex-direction: column;
      overflow-y: scroll;

      .buttons {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
      }

      &__input {
        margin-top: 10px;
      }
    }
  }
`;
