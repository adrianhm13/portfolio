import styled from "@emotion/styled";

type TitleProps = {
  isName: string;
};

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0 auto",
});
export const Section = styled.section((props) => ({
  paddingTop: props.theme.padding.extraLarge,
  paddingRight: props.theme.padding.normal,
  paddingLeft: props.theme.padding.normal,
}));
export const Hello = styled.h5((props) => ({
  ...props.theme.typography.hello,
}));

export const Title = styled.h2<TitleProps>((props) => ({
  ...props.theme.typography.h1,
  fontSize: props.isName ? "4rem" : props.theme.typography.title.fontSize,
}));

export const Subtitle = styled.h3(
  {
    fontSize: "1.5rem",
  },
  (props) => ({
    fontFamily: props.theme.typography.fontPoppins,
    color: props.theme.secondary.light,
  })
);
