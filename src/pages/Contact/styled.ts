import styled from "@emotion/styled";

export const Text = styled.p((props) => ({
  ...props.theme.typography.paragraph,
}));

export const ContactContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: "30px",
  fontWeight: "300",
  "& > div": {
    display: "inline-flex",
  },
  backgroundColor: props.theme.primary.elevation,
  borderRadius: "3px",
  padding: props.theme.padding.normal,
  fontFamily: props.theme.typography.fontPoppins,
  "& i": {
    marginRight: "0.5rem",
    color: props.theme.secondary.light,
    fontSize: "24px",
  },
  "& > div > a": {
    textDecoration: "none",
    color: "white",
    position: "relative",
  },
  "& > div > a:after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "1px",
    bottom: "0",
    left: "0",
    backgroundColor: props.theme.secondary.light,
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "& > div > a:hover:after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}));
