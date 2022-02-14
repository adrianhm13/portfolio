import { useState } from "react";

import { Button } from "../Button/styled";
import Hamburger from "../Hamburger";
import * as Styled from "./styled";
import Resume from "../../assets/resume/Adrian_Resume.pdf";

const pages = ["About", "Skills", "Projects", "Contact"];

export default function Drawer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (page: string) => {
    const anchor = document.getElementById(page);
    anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsActive(false);
  };

  return (
    <>
      <Hamburger setIsActive={setIsActive} isActive={isActive} />
      <Styled.Drawer className={isActive ? "show" : ""}>
        <ul>
          {pages.map((page) => (
            <li key={page} onClick={() => handleClick(page)}>
              <a href={`#${page}`}>{page}</a>
            </li>
          ))}
        </ul>
        <Button
          href={Resume}
          target="_blank"
          style={{ marginTop: "2.5rem", padding: "1rem 2rem" }}
        >
          Resume
        </Button>
      </Styled.Drawer>
    </>
  );
}
