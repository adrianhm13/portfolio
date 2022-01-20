import { useState } from "react";
import * as Styled from "./styled";

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Styled.Hamburger
      className={isActive ? "isActive" : ""}
      onClick={() => setIsActive(!isActive)}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </Styled.Hamburger>
  );
}
