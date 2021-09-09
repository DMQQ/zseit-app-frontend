import * as Styled from "./styles.d";

interface SidebarProps {
  sidebar: boolean;
}

export default function Sidebar({ sidebar }: SidebarProps) {
  return <Styled.Sidebar sidebar={sidebar}></Styled.Sidebar>;
}
