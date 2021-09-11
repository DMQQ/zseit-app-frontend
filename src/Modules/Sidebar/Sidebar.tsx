import * as Styled from "./styles.d";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Burger from "Components/Burger/Burger";
import User from "Modules/User/User";

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
  }, [sidebar, controls]);

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
            transition={{ duration: 0.5 }}
          >
            <motion.ol>
              <div style={{ padding: 10, marginTop: 35 }}>
                <Burger />
              </div>
              <User />
            </motion.ol>
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Sidebar>
  );
}
