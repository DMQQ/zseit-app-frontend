import * as Styled from "./styles.d";
import Burger from "../Burger/Burger";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Styled.Header>
      <h2 className="app-name">PROGRAMISTA ZSEIT</h2>
      <nav className="burger-section">
        <Burger open={open} setOpen={setOpen} />
      </nav>
    </Styled.Header>
  );
}
