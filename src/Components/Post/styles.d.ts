import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 50vw;

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }

  .no-margin {
    margin: 10px;
    padding: 0;
  }

  .post {
    min-width: 200px;
    padding: 5px;
    width: 100%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.secondary100Color};

    display: flex;

    &__img {
      width: 15%;
      min-width: 120px;
      border-radius: 5px;
    }

    &__details {
      display: flex;
      flex-basis: 84%;
      color: #dddddd;
      align-items: center;
      justify-content: space-between;

      &__title {
        margin-left: 10px;
      }

      &__category {
        background-color: ${({ theme }) => theme.primaryColor};
        padding: 5px 10px;
        border-radius: 10px;
      }

      &__btn {
        font-family: "Poppins";
      }
    }
  }
`;
