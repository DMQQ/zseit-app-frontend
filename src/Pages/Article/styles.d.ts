import styled from "styled-components";

export const Article = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};

  .content-section {
    width: 60%;
    color: ${({ theme }) => theme.secondaryColor};

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

    li {
      padding-left: 10px;
      padding-bottom: 10px;
    }

    blockquote {
      background-color: blue;
    }
  }
`;
