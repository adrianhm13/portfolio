import * as Styled from "./styled";
import Section from "../../components/Section";

export default function Presentation() {
  return (
    <Section>
      <Styled.BoxBackground>
        <Styled.Hello>Hi there! my name is</Styled.Hello>
        <Styled.Title isName="true">
          Adrian Hervas<span>.</span>
        </Styled.Title>
        <Styled.Profession>
          <Styled.Subtitle>I am a self-taught </Styled.Subtitle>
          <Styled.TypeWrite>Full Stack Software Engineer.</Styled.TypeWrite>
        </Styled.Profession>
      </Styled.BoxBackground>
    </Section>
  );
}
