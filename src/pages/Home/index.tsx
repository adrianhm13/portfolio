import Container from "../../components/Container";
import Presentation from "../Presentation";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import * as Styled from './styled'

export default function Home() {
  return (
    <Container>
      <Styled.Hero />
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}
