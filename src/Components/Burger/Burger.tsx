import { useDispatch, useSelector } from "react-redux";
import { ModalActions } from "redux/Modals/Modals";
import * as Styled from "./styles.d";

export default function Burger() {
  const { sidebar } = useSelector((state: any) => state.modals);
  const dispatch = useDispatch();

  const toggle = () => dispatch(ModalActions.toggleSideBar());

  return (
    <Styled.Burger open={sidebar} onClick={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Burger>
  );
}
