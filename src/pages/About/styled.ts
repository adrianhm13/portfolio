import styled from "@emotion/styled";

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  "@media (max-width: 600px)": {
    flexWrap: 'wrap'
  }
})

export const Avatar = styled.div({
  width: '30%',
})
export const Text = styled.p((props) => ({
  ...props.theme.typography.paragraph,
  lineHeight: "2rem",
  width: '70%',
}));
