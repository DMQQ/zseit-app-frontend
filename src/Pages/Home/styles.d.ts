import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  .content {
    transition: all 150ms linear;

    &__headings {
      color: black;
      padding: 15px;
      font-size: 35px;
      text-align: center;
      color: white;
    }
  }
`;
