import * as Styled from "./styles.d";

type ButtonProps = {
  open: boolean;
  setOpen: (p: any) => void;
};

export default function Burger({ open, setOpen }: ButtonProps) {
  const toggle = () => setOpen(!open);
  return (
    <Styled.Burger open={open} onClick={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Burger>
  );
}
