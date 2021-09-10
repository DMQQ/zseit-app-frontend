import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 90%;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchForm = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 17px;
  border: none;
  background: #1d1d1d;
  border-radius: 5px;
`;
