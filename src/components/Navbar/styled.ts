import styled from "@emotion/styled";

export const Navbar = styled.header(
  {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
      paddingTop: props.theme.padding.small,
      paddingBottom: props.theme.padding.small,
      paddingRight: props.theme.padding.large,
      paddingLeft: props.theme.padding.large,
    },
  })
);

export const Title = styled.h1((props) => ({
  fontFamily: props.theme.typography.h1.fontFamily,
  fontWeight: props.theme.typography.h1.fontWeight,
}));

export const SectionsNav = styled.nav(
  {
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
    listStyle: "none",
    gap: "2rem",
    "@media (min-width: 0px)": {
      display: "none",
    },
    "@media (min-width: 900px)": {
      display: "inline-flex",
    },
  },
  (props) => ({
    fontFamily: props.theme.typography.fontMono,
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
      height: "2px",
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
  })
);
