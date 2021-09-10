import * as Styled from "./styles.d";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { CATEGORIES } from "Modules/Categories/Categories";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

interface SidebarProps {
  sidebar: boolean;
}

export default function Sidebar({ sidebar }: SidebarProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }));
  }, [sidebar]);

  return (
    <Styled.Sidebar>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            key="sidebar"
            className="sidebar"
            initial={{ clipPath: "circle(0% at 100% 49%)", y: "-100%" }}
            animate={{ clipPath: "circle(100% at 100% 49%)", y: 0 }}
            exit={{ clipPath: "circle(0% at 100% 49%)", y: "-100%" }}
            transition={{ ease: "circIn", duration: 0.5 }}
          >
            <motion.ol>
              {CATEGORIES.map((cat, i) => {
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    custom={i}
                  >
                    <Button variant="outlined" color="primary">
                      {cat}
                    </Button>
                  </motion.li>
                );
              })}
            </motion.ol>
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Sidebar>
  );
}
