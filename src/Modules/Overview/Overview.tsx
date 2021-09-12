import * as Styled from "./styles.d";
import { ReactComponent as CodeImage } from "assets/images/code.svg";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Overview() {
  const containerRef = useRef<any>(null);

  return (
    <Styled.Container ref={containerRef}>
      <section className="content">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          ZSEIT Programista
        </motion.h1>
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
