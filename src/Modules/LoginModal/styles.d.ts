import styled from "styled-components";
import { motion } from "framer-motion";

export const Auth = styled(motion.main)`
  display: flex;
  flex-direction: column;
  z-index: 20;
  transition: all 100ms linear;

  .form {
    position: absolute;
    right: 20px;
    top: 100px;
    width: 250px;
    margin: 10px;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 31;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);

    &__input {
      margin-top: 10px;
    }
  }
`;
