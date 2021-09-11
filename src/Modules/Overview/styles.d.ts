import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});

  h1 {
    color: #00c896;
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px;
  }

  .decoration {
    width: 70vw;
    margin-top: 50px;
  }
`;
