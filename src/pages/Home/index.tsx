import Container from "../../components/Container";
import Presentation from "../Presentation";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

export default function Home() {
  return (
    <Container>
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}
