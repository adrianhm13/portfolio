import styled from "@emotion/styled";

export const Badge = styled.div(
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    borderRadius: 32 / 2,
    fontSize: "0.8rem",
    boxSizing: "border-box",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    "& img": {
      width: "20px",
      borderRadius: "50%",
      marginRight: '0.5rem',
    },
  },
  (props) => ({
    padding: `${props.theme.padding.badge.Y} ${props.theme.padding.badge.X}`,
    border: `1px solid ${props.theme.primary.light}`,
    color: props.theme.secondary.light,
  })
);
