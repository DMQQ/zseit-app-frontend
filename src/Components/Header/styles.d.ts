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
    margin-left: 5px;

    &__logo {
      color: ${({ theme }) => theme.secondaryColor};
      padding: 10px;
      font-size: 20px;
      text-align: left;
      font-weight: bold;

      width: 15%;

      @media only screen and (max-width: 1100px) {
        width: 40%;
      }
      @media only screen and (max-width: 500px) {
        width: 60%;
      }

      &__status {
        font-size: 13px;
        color: #00c896;
        margin-bottom: 10px;
      }
    }
  }

  .app-name {
    font-size: 20px;
    color: #dddddd;
    flex-basis: 30%;
    color: ${({ theme }) => theme.secondaryColor};
  }

  .button-hover {
    border-color: #00c896;
    color: #00c896;
    transition: all 100ms linear;

    @media only screen and (max-width: 1000px) {
      display: none;
    }

    :hover {
      border-color: white;
      color: white;
    }
  }
`;
