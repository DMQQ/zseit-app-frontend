import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 30;
  height: ${({ height }: { height: number }) => height}px;
  transition: all 150ms linear;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};

  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      color: ${({ theme }) => theme.secondaryColor};
      padding: 10px;
      font-size: 20px;
      text-align: left;
      font-weight: bold;
    }
  }

  .app-name {
    font-size: 20px;
    color: #dddddd;
    flex-basis: 30%;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
