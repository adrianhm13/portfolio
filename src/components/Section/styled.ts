import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const showSection = keyframes`
from{
  opacity: 0;
  transform: translateY(5rem)
}
to{
  opacity: 1;
  transform: translateY(0)
}
`;

export const Section = styled.section(
  {
    marginBottom: '2rem',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    opacity: "0",
    "&.fadeIn": {
      animation: `${showSection} 2s ease forwards .1s`,
    },
  },
  (props) => ({
    paddingRight: props.theme.padding.small,
    paddingLeft: props.theme.padding.small,
  })
);
