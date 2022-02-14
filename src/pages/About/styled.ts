import styled from "@emotion/styled";

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  "@media (max-width: 600px)": {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const Avatar = styled.div({
  width: '30%',
  "& img": {
    width: '100%',
  }
})

export const SubtitleText = styled.h5(props => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "300",
  fontSize: "clamp(0.75rem, 5vw, 1.5rem)",
  paddingBottom: props.theme.padding.small,
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
}));

export const Text = styled.p((props) => ({
  ...props.theme.typography.paragraph,
  padding: props.theme.padding.normal,
  lineHeight: "2rem",
  width: '70%',
  "@media (max-width: 600px)": {
    width: '100%',
    padding: props.theme.padding.small,
  },
}));
