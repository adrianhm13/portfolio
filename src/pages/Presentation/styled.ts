import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type TitleProps = {
  isName: string;
};

const typing = keyframes`
  from {
    width: 0;
  }
`;
const blink = keyframes`
50% {
  border-color: transparent;
}
`;

export const Hello = styled.h5((props) => ({
  ...props.theme.typography.hello,
}));

export const Title = styled.h2<TitleProps>((props) => ({
  ...props.theme.typography.h1,
  fontSize: props.isName ? "5rem" : props.theme.typography.title.fontSize,
}));

export const Subtitle = styled.h3((props) => ({
  fontFamily: props.theme.typography.fontMono,
  color: props.theme.secondary.light,
}));

export const TypeWrite = styled.h3(
  {
    width: "28ch",
    animation: `${typing} 2s steps(28), ${blink} .5s step-end infinite alternate`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "3px solid",
    fontFamily: "monospace",
  },
  (props) => ({
    fontFamily: props.theme.typography.fontMono,
    color: props.theme.secondary.light,
  })
);

export const Profession = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
  fontSize: "clamp(0.7rem, 2.5vw, 1.3rem)",
});
