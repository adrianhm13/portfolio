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

export const AvatarDesktop = styled.img({
  width: '30%',
  display: 'none',
  "@media (min-width: 600px)":{
    display: 'block'
  }
})

export const AvatarPhone = styled.img({
  width: '75%',
  display: 'none',
  "@media (max-width: 600px)":{
    display: 'block'
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
  lineHeight: "2rem",
  width: '70%',
  "@media (max-width: 600px)": {
    width: '100%',
  },
}));
