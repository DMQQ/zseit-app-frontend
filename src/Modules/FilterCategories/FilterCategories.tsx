import { Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";

interface FilterProps {
  setCategories: any;
}

export default function FilterCategories({ setCategories }: FilterProps) {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  function Add(cat: string) {
    setCategories(cat);
  }

  return (
    <div style={{ position: "relative" }}>
      <Button
        style={{ backgroundColor: "#1d1d1d", marginRight: 5, padding: 5 }}
        onClick={toggle}
      >
        <ArrowDropDownIcon style={{ color: "white", fontSize: 35 }} />
      </Button>

      <Dropdown show={show} toggle={toggle} Add={Add} />
    </div>
  );
}
