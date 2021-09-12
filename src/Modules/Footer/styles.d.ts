import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 100px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  p {
    color: white;
  }

  a {
    margin-left: 10px;
    color: white;
  }
`;
