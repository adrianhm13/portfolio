import styled from "@emotion/styled";

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  "@media (max-width: 600px)": {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const Avatar = styled.div({
  width: '30%',
  "@media (max-width: 600px)": {
    width: '75%',
  },
  "& img": {
    width: '100%',
  }
})
export const Text = styled.p((props) => ({
  ...props.theme.typography.paragraph,
  lineHeight: "2rem",
  width: '70%',
  "@media (max-width: 600px)": {
    width: '100%',
  },
}));
