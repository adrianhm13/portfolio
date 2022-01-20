import React from "react";
import { Button } from "../Button/styled";
import Hamburger from "../Hamburger";
import * as Styled from "./styled";

export default function Navbar() {
  return (
    <Styled.Navbar>
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
