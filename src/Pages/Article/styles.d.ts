import styled from "styled-components";

export const Article = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};

  .content-section {
    width: 60%;
    color: ${({ theme }) => theme.secondaryColor};

    @media only screen and (max-width: 800px) {
      width: 90%;
    }
    @media only screen and (max-width: 1000px) {
      width: 80%;
    }
    @media only screen and (max-width: 500px) {
      width: 95%;
    }

    hr {
      margin: 10px;
    }

    h1 {
      font-size: 55px;
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
      border-radius: 5px;
    }
  }
`;
