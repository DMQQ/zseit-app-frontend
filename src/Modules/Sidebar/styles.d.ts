import styled from "styled-components";
import { motion } from "framer-motion";

export const Sidebar = styled.aside`
  .sidebar {
    position: fixed;
    background: #19191a;
    width: 400px;
    height: 100vh;
    right: 0;
    z-index: 20;
    padding: 30px;

    li {
      color: white;
      padding: 10px;
    }
  }
`;
