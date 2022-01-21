import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const show = keyframes`
0%{
    opacity: 1;
    transform: translateX(100vw)
}

100%{
    opacity: 1;
  transform: translateX(0)
}
`;

export const Drawer = styled.div(
  {
    position: "absolute",
    opacity: "0",
    top: "0",
    left: "0",
    minWidth: "100vw",
    minHeight: "100vh",
    "&.show": {
      animation: `${show} 1s cubic-bezier(0.65, 0.05, 0.36, 1) forwards`,
      "@media (min-width: 900px)": {
        display: "none",
      },
    },
  },
  (props) => ({
    backgroundColor: props.theme.primary.main,
  })
);
