import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.secondary100Color};

  .app-name {
    font-size: 25px;
    color: #dddddd;
  }
`;
