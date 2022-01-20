import styled from "@emotion/styled";

export const Hamburger = styled.button({
  backgroundColor: "transparent",
  border: "none",
  
  "&.isActive .line:nth-child(1)": {
    webkitTransform: "translateY(10px) rotate(45deg)",
    msTransform: "translateY(10px) rotate(45deg)",
    OTransform: "translateY(10px) rotate(45deg)",
    transform: "translateY(10px) rotate(45deg)",
  },
  "&.isActive .line:nth-child(2)": {
    opacity: "0",
  },
  "&.isActive .line:nth-child(3)": {
    WebkitTransform: "translateY(-10px) rotate(-45deg)",
    msTransform: "translateY(-10px) rotate(-45deg)",
    OTransform: "translateY(-10px) rotate(-45deg)",
    transform: "translateY(-10px) rotate(-45deg)",
  },
  "& .line": {
    width: "35px",
    height: "3px",
    backgroundColor: "#ecf0f1",
    display: "block",
    margin: "6px auto",
    WebkitTapHighlightColor: 'transparent',
    WebkitTransition: "all 0.3s ease-in-out",
    OTransition: "all 0.3s ease-in-out",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
    },
    "@media (min-width: 0px)": {
      display: "block",
    },
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
});
