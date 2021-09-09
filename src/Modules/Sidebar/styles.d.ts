import styled from "styled-components";

export const Sidebar = styled.aside`
  position: fixed;
  top: 60px;
  width: 400px;
  height: 100vh;
  transition: all 200ms ease-in;
  background-color: #111111;
  right: 0;
  z-index: 2;
  transform: ${({ sidebar }: { sidebar: boolean }) =>
    sidebar ? "translateX(0)" : "translateX(100%)"};
`;
