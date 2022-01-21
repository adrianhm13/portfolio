import styled from "@emotion/styled";

export const SkillsContainer = styled.div({
  paddingBottom: "1rem",
  paddingLeft: "2rem",
  paddingTop: "1rem",
});

export const SkillsCategory = styled.h5({
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

export const SkillsList = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: 'center',
  justifyContent: 'center',
},props=> ({paddingTop: props.theme.padding.normal}));

export const SkillCard = styled.div(
  {
    flexGrow: "1",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    fontWeight: '200',
    "& img" : {
        width: '75px'
    }
  },
  (props) => ({
    backgroundColor: props.theme.primary.elevation,
    borderRadius: "3px",
    padding: props.theme.padding.extraSmall,
    fontFamily: props.theme.typography.fontPoppins
  })
);
