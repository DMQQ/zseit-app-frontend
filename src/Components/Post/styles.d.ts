import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100%;

  .no-margin {
    margin: 10px;
    padding: 0;
  }

  .post {
    min-width: 200px;
    padding: 5px;
    width: 60vw;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.secondary100Color};
    display: flex;

    @media only screen and (max-width: 1000px) {
      width: 80vw;
    }

    @media only screen and (max-width: 800px) {
      width: 90vw;
    }

    &__img {
      width: 15%;
      border-radius: 5px;
    }

    &__details {
      display: flex;
      width: 85%;
      color: #dddddd;
      justify-content: space-between;

      &__title {
        margin-left: 10px;
      }

      &__category {
        padding: 5px 10px;
        border-radius: 10px;

        .category {
          font-size: 12px;
          margin-right: 5px;
        }
      }

      &__btn {
        font-family: "Poppins";
      }
    }
  }
`;
