import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};

  .content {
    margin-top: 120px;
    text-align: left;

    &__headings {
      color: white;
      padding: 15px;
      font-size: 35px;
    }
  }
`;
