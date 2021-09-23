interface ConfirmProps {
  show: boolean;
  setShow: (_: any) => void;
  setConfirm: (_: boolean) => void;
}

import { Button } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

// fix styling later

export default function Confirm({
  show,
  setConfirm,
  setShow,
}: ConfirmProps): JSX.Element {
  function Confirm() {
    setConfirm(true);
    setShow(false);
  }
  function Abort() {
    setConfirm(false);
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vw" }}
        >
          <h2>Potwierdź</h2>
          <Button variant="contained" color="primary" onClick={Abort}>
            Anuluj
          </Button>
          <Button variant="text" color="primary" onClick={Confirm}>
            Potwierdź
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
