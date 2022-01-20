import { useEffect } from "react";
import { useScrollHeader } from "../../hooks/useScrollHeader";

import { Button } from "../Button/styled";
import Hamburger from "../Hamburger";

import * as Styled from "./styled";

export default function Navbar() {
  const { scrollHeader } = useScrollHeader();
  useEffect(() => {
    scrollHeader();
  }, [scrollHeader]);
  return (
    <Styled.Navbar id="header">
      <Styled.Title>
        adrianhm<span>.dev</span>
      </Styled.Title>
      <Styled.SectionsNav>
        <li>About me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <Button>Resume</Button>
      </Styled.SectionsNav>
      <Hamburger />
    </Styled.Navbar>
  );
}
