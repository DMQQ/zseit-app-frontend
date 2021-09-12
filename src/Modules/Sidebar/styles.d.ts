import styled from "styled-components";

export const Sidebar = styled.aside`
  .sidebar {
    position: fixed;
    background: #19191a;
    width: 400px;
    height: 100vh;
    right: 0;
    z-index: 50;
    padding: 10px;
    color: #00c896;

    @media only screen and (max-width: 700px) {
      width: 100%;
    }

    h3 {
      color: #00c896;
      margin-top: 50px;
    }

    ul {
      padding: 20px;
    }
  }
`;
