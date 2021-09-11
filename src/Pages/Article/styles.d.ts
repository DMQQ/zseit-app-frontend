import styled from "styled-components";
import article from "assets/images/article2.svg";

export const Article = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  background-image: url(${article});
  background-size: cover;
  background-attachment: fixed;

  .content-section {
    width: 60%;
    color: ${({ theme }) => theme.secondaryColor};
    min-height: 95vh;

    word-wrap: normal;
    word-break: inherit;

    @media only screen and (max-width: 800px) {
      width: 90%;
    }
    @media only screen and (max-width: 1000px) {
      width: 80%;
    }
    @media only screen and (max-width: 500px) {
      width: 95%;
    }

    word-break: break-all;

    hr {
      margin: 10px;
    }

    h1 {
      font-size: 55px;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 35px;
    }

    h3 {
      font-size: 25px;
    }

    ul,
    ol {
      padding: 15px;
    }

    li {
      padding-left: 10px;
      padding-bottom: 10px;
    }

    blockquote {
      background-color: blue;
    }
    .span-styles {
      background-color: #181818;
      padding: 5px;
      border-radius: 10px;
      margin: 5px;
    }

    img {
      width: 100%;
    }
  }
`;
