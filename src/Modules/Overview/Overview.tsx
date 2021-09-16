import * as Styled from "./styles.d";
import { ReactComponent as CodeImage } from "assets/images/code.svg";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <Styled.Container>
      <section className="content">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <CodeImage className="decoration" />
        </motion.div>
      </section>
    </Styled.Container>
  );
}
