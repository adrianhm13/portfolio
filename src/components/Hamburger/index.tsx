import * as Styled from "./styled";

type HamburgerProps = {
  isActive: null | boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hamburger({isActive, setIsActive}:HamburgerProps) {
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
