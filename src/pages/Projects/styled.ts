import styled from "@emotion/styled";

export const ProjectContainer = styled.div({
  paddingBottom: "1rem",
  paddingTop: "1rem",
  marginBottom: "2.5rem",
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
  gap: "1rem",
  marginBottom: "2.5rem",
});

export const ProjectInformation = styled.div(
  {
    fontSize: "18px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    gap: "1rem",
    textAlign: "justify",
    "@media (min-width: 0px)": {
      flexWrap: "wrap",
      "& div": {
        width: '100%',
      },
    },
    "@media (min-width: 900px)": {
      flexWrap: "nowrap",
    },
  },
  (props) => ({
    paddingTop: props.theme.padding.normal,
    "& hr": {
      border: "none",
      borderRadius: "50%",
      opacity: "0.3",
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

export const ProjectTitle = styled.h5(
  {
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(1.25rem, 5vw, 1.5rem)",
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
  },
  (props) => ({
    fontWeight: props.theme.fontWeight.bold,
  })
);

export const TitleDetails = styled.h5((props) => ({
  fontFamily: props.theme.typography.fontPoppins,
  fontWeight: props.theme.fontWeight.bold,
  fontSize: "18px",
  "&:before": {
    content: `'<>'`,
    fontWeight: "900",
    color: "#e0aaff",
    letterSpacing: "-2px",
    paddingRight: "0.3rem",
  },
  "&:after": {
    content: `':'`,
    fontWeight: "900",
    color: "#e0aaff",
    letterSpacing: "-15px",
    paddingRight: "1rem",
  },
}));

export const ContentDetails = styled.div((props) => ({
  fontFamily: props.theme.typography.fontPoppins,
  fontWeight: props.theme.fontWeight.extraLight,
  fontSize: "16px",
  paddingTop: props.theme.padding.normal,
  "& ul": {
    marginTop: '0.5rem',
    paddingLeft: props.theme.padding.small,
    listStyle: "none",
  },
  "& li:before": {
    fontSize: '18px',
    lineHeight: '15px',
    content: '"\u2023"',
    marginRight: "0.5rem",
  },
}));

export const ButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "50px",
  marginTop: "1rem",
});
