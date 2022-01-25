import { useEffect } from "react";
import { useScrollHeader } from "../../hooks/useScrollHeader";

import { Button } from "../Button/styled";
import Drawer from "../Drawer";

import * as Styled from "./styled";

export default function Navbar() {
  const { scrollHeader } = useScrollHeader();
  useEffect(() => {
    scrollHeader();
  }, [scrollHeader]);

  const handleClick = (id: string) => {
    const anchor = document.getElementById(id);
    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Styled.Navbar id="header">
      <Styled.Title>
        adrianhm<span>.dev</span>
      </Styled.Title>
      <Styled.SectionsNav>
        <ul>
          <li onClick={() => handleClick("About")}>About</li>
          <li onClick={() => handleClick("Skills")}>Skills</li>
          <li onClick={() => handleClick("Projects")}>Projects</li>
          <li onClick={() => handleClick("Contact")}>Contact</li>
        </ul>
        <Button>Resume</Button>
      </Styled.SectionsNav>
      <Drawer />
    </Styled.Navbar>
  );
}
