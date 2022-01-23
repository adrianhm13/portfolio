import styled from "@emotion/styled";

export const ProjectContainer = styled.div({
  paddingBottom: "1rem",
  paddingTop: "1rem",
  "@media (min-width: 0px)": {
    paddingLeft: "0",
  },
  "@media (min-width: 900px)": {
    paddingLeft: "2rem",
  },
});

export const ProjectContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: '1rem',
});

export const ProjectInformation = styled.div(
  {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    gap: "1rem",
    textAlign: "justify",
    "@media (min-width: 0px)": {
      flexWrap: "wrap",
    },
    "@media (min-width: 900px)": {
      flexWrap: "nowrap",
    },
  },
  (props) => ({
    "& hr": {
      border: "none",
      borderRadius: "50%",
      "@media (min-width: 0px)": {
        borderTop: `1px solid ${props.theme.secondary.light}`,
        width: "100%",
      },
      "@media (min-width: 900px)": {
        borderLeft: `1px solid ${props.theme.secondary.light}`,
        width: "0",
      },
    },
  })
);
export const ImageContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    width: "100%",
  },
});

export const ProjectTitle = styled.h5({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "300",
  fontSize: "clamp(0.75rem, 5vw, 1.5rem)",
  "&:before": {
    content: `'>'`,
    fontWeight: "900",
    color: "#e0aaff",
    letterSpacing: "-15px",
    paddingRight: "1rem",
  },
  "&:after": {
    content: `':'`,
    fontWeight: "900",
    color: "#e0aaff",
    letterSpacing: "-15px",
    paddingRight: "1rem",
  },
});
