import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  width: 30vw;
  height: 70vh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  background: white;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);

  transform: translate(-50%, -50%);

  .heading {
    padding: 10px;
  }

  ul {
    padding: 25px;
  }

  p {
    padding-left: 10px;
  }
`;
