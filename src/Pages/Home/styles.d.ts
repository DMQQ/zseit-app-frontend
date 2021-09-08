import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};

  .content {
    margin-top: 100px;
  }
`;
