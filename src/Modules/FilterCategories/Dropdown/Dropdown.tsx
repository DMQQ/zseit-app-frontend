import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES } from "Modules/Categories/Categories";
import { Button } from "@material-ui/core";

interface DropDownProps {
  show: boolean;
  toggle: () => void;
  Add: (cat: string) => void;
  categories: string;
}

export default function Dropdown({
  show,
  toggle,
  Add,
  categories,
}: DropDownProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.ul
          key="list"
          style={{
            width: 500,
            backgroundColor: "#1d1d1d",
            position: "fixed",
            listStyle: "none",
            borderRadius: 10,
            marginTop: 10,
            padding: 10,
            display: "flex",
            flexWrap: "wrap",
          }}
          transition={{ duration: 0.15 }}
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: -100 }}
        >
          {CATEGORIES.map((cat) => {
            return (
              <li key={cat}>
                <Button
                  variant={categories === cat ? "contained" : "outlined"}
                  color="primary"
                  style={{ margin: 5 }}
                  onClick={() => {
                    Add(cat);
                    toggle();
                  }}
                >
                  {cat}
                </Button>
              </li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
