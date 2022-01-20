import * as Styled from "./styled";

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Hello>Hi there! my name is</Styled.Hello>
        <Styled.Title isName="true">
          Adrian Hervas<span>.</span>
        </Styled.Title>
        <Styled.Profession>
          <Styled.Subtitle>I am a</Styled.Subtitle>
          <Styled.TypeWrite>Front-End Software Engineer.</Styled.TypeWrite>
        </Styled.Profession>
      </Styled.Section>
      <Styled.Section>
        <Styled.Hello>Hi there! my name is</Styled.Hello>
        <Styled.Title isName="true">
          Adrian Hervas<span>.</span>
        </Styled.Title>
        <Styled.Profession>
          <Styled.Subtitle>I am a</Styled.Subtitle>
          <Styled.TypeWrite>Front-End Software Engineer.</Styled.TypeWrite>
        </Styled.Profession>
      </Styled.Section>
    </Styled.Container>
  );
}
