import styled from "styled-components";

export const SearchForm = styled.section`
  width: 100%;
  padding: 10px;
  height: 100px;

  .input-field {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
    border: 1.5px solid white;
    border-radius: 5px;
    color: #3f51b5;
    transition: all 100ms linear;

    &:focus {
      border: 1.5px solid #3f51b5;
      outline: none;
    }
  }
`;
