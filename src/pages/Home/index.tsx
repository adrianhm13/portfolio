import * as Styled from "./styled";

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Hello>Hi there! my name is</Styled.Hello>
        <Styled.Title isName="true">
          Adrian Hervas<span>.</span>
        </Styled.Title>
        <Styled.Subtitle>
          Front-End Software Engineer.
        </Styled.Subtitle>
      </Styled.Section>
    </Styled.Container>
  );
}
