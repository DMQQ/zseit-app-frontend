import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 200ms ease-in;

  .no-margin {
    margin: 10px;
    padding: 0;
  }

  .post {
    position: relative;
    min-width: 200px;
    padding: 5px;
    width: 60vw;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.secondary100Color};
    display: flex;

    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 1200px) {
      width: 80vw;
    }

    @media only screen and (max-width: 850px) {
      width: 90vw;
    }

    @media only screen and (max-width: 600px) {
      width: 95vw;
    }

    &__message {
      color: #00c896;
      font-weight: bold;
      position: absolute;
      right: 10px;
    }

    &__img {
      width: 25%;
      min-width: 150px;
      border-radius: 5px;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;

      &__img {
        width: 100%;
      }
    }

    &__details {
      display: flex;
      width: 90%;
      color: #dddddd;
      justify-content: space-between;

      @media only screen and (max-width: 750px) {
        flex-direction: column;
      }

      &__title {
        margin-left: 10px;
        font-size: 25px;
        letter-spacing: 1px;
        word-break: break-all;

        @media only screen and (max-width: 600px) {
          font-size: 20px;
        }
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
        display: flex;
        flex-wrap: wrap;

        .category {
          height: 30px;
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
