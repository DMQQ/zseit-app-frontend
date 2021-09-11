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

    @media only screen and (max-width: 700px) {
      width: 100%;
    }

    ol {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    li {
      color: white;
      padding: 10px;
    }
  }
`;
