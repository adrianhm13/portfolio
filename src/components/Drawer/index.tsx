import { useState } from "react";
import Hamburger from "../Hamburger";
import * as Styled from "./styled";
export default function Drawer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
      <Styled.Drawer className={isActive ? "show" : ""}>Test</Styled.Drawer>
    </>
  );
}
