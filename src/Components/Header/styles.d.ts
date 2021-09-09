import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #000;
  z-index: 30;

  height: 60px;

  .app-name {
    font-size: 20px;
    color: #dddddd;
    flex-basis: 30%;
  }
`;
