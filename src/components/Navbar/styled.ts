import styled from "@emotion/styled";

export const Navbar = styled.header(
  {
    position: "fixed",
    top: "0",
    zIndex: "50",
    transition: "all .3s ease",
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "&.hide": {
      top: "-72px",
    },
  },
  (props) => ({
    backgroundColor: props.theme.primary.light,
    "@media (min-width: 0px)": {
      paddingRight: props.theme.padding.small,
      paddingLeft: props.theme.padding.small,
      paddingTop: props.theme.padding.small,
      paddingBottom: props.theme.padding.small,
    },
    "@media (min-width: 900px)": {
      paddingTop: props.theme.padding.extraSmall,
      paddingBottom: props.theme.padding.extraSmall,
      paddingRight: props.theme.padding.large,
      paddingLeft: props.theme.padding.large,
    },
  })
);

export const Title = styled.h1((props) => ({
  fontFamily: props.theme.typography.h1.fontFamily,
  fontWeight: props.theme.typography.h1.fontWeight,
  fontSize: "clamp(1.5em, 2.5vw, 2.5em)",
}));

export const SectionsNav = styled.nav((props) => ({
  display: "flex",
  gap: "2rem",
  "& ul": {
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
    listStyle: "none",
    fontFamily: props.theme.typography.fontMono,
    gap: "1.2rem",
  },
  "@media (min-width: 0px)": {
    display: "none",
  },
  "@media (min-width: 900px)": {
    display: "inline-flex",
  },
  "& li": {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  },
  "& li:after": {
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
  "& li:hover:after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}));
