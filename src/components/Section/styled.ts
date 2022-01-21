import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const showSection = keyframes`
to{
  opacity: 1;
  transform: translateY(0)
}
`;

export const Section = styled.section(
  {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    opacity: '0',
    "&.fadeIn": {
      transform: "translateY(5rem)",
      animation: `${showSection} 2s ease forwards`,
    },
  },
  (props) => ({
    paddingRight: props.theme.padding.small,
    paddingLeft: props.theme.padding.small,
  })
);
