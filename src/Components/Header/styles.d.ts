import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 30;

  height: 60px;

  .button {
    color: ${({ theme }) => theme.secondaryColor};
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .app-name {
    font-size: 20px;
    color: #dddddd;
    flex-basis: 30%;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
