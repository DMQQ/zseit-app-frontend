import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #00c896;
    text-align: center;
    font-size: 40px;
    margin-top: 100px;
    margin-bottom: 20px;

    @media only screen and (max-width: 850px) {
      padding: 5px;
    }
  }

  .decoration {
    width: 70vw;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 25px;
      margin-top: 50px;
    }
    .decoration {
      width: 95vw;
    }
  }
`;
