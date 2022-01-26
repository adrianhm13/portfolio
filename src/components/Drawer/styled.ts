import styled from "@emotion/styled";

export const Drawer = styled.div(
  {
    position: "fixed",
    top: "0",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: "translateX(100%)",
    width: "100%",
    height: "100vh",
    transition: "all .5s",
    "&.show": {
      transform: "translateX(0)",
    },
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
  (props) => ({
    backgroundColor: props.theme.primary.main,
    "& ul": {
        listStyle: 'none',
        lineHeight: '5rem',
        fontFamily: props.theme.typography.fontPoppins,
        fontSize: '2.5rem',
    },
    "& > ul > li > a" : {
        textDecoration: 'none',
        color: props.theme.white,
        "&:before": {
            content: `'>>'`,
            fontWeight: "900",
            color: "#e0aaff",
            letterSpacing: "-15px",
            paddingRight: "1rem",
          },
          "&:after": {
            content: `'.'`,
            fontWeight: "900",
            color: "#e0aaff",
            letterSpacing: "-15px",
            paddingRight: "1rem",
          },
    }
  })
);
