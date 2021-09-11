import styled from "styled-components";

export const Container = styled.article`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;

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

    @media only screen and (max-width: 1200px) {
      width: 80vw;
    }

    @media only screen and (max-width: 850px) {
      width: 90vw;
    }

    &__img {
      width: 25%;
      min-width: 150px;
      border-radius: 5px;

      max-height: 150px;
    }

    &__details {
      display: flex;
      width: 85%;
      color: #dddddd;
      justify-content: space-between;

      &__title {
        margin-left: 10px;
        font-size: 25px;
        letter-spacing: 1px;
        word-break: break-all;
      }

      &__text-container {
        display: flex;
        flex-direction: column;
        text-align: left;

        .post-desc {
          font-size: 13px;
          word-break: break-word;
          padding: 10px;
        }
      }

      &__category {
        padding: 5px 10px;
        border-radius: 10px;

        @media only screen and (max-width: 800px) {
          display: none;
        }

        .category {
          font-size: 12px;
          margin-right: 5px;
          background-color: rgb(44, 44, 44);
          padding: 5px;
          border-radius: 10px;
        }
      }

      &__btn {
        font-family: "Poppins";
      }
    }
  }
`;
