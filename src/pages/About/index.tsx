import * as Styled from "./styled";
import Section from "../../components/Section";
import PageTitle from "../../components/PageTitle";
import ProfilePicture from '../../assets/images/Avatar.png'

export default function About() {
  return (
    <Section id="About">
      <PageTitle title="About" />
      <Styled.Content>
        <Styled.Avatar>
          <img src={ProfilePicture} alt="Profile Adrian" />
        </Styled.Avatar>
        <Styled.Text>
          Hello! my name is Adrian. I am a <span>self-taught web developer</span>.
          My interest in programming came up when I was modeling 3D characters as
          a hobby. At some point, I wanted to build a visual novel with the models
          I created with Unity, the game engine. I had to learn how to interpret
          the scripts of other developers and modify them to adapt them to the
          visual novel. In this process is when I realized that I enjoyed
          programming. The feeling of seeing something working through code was
          extremely rewarding, so I decided to become a web developer.
        </Styled.Text>
      </Styled.Content>
    </Section>
  );
}
