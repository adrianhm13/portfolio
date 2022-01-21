import Container from "../../components/Container";
import Presentation from "../Presentation";
import About from "../About";
import Skills from "../Skills";

export default function Home() {
  return (
    <Container>
      <Presentation />
      <About />
      <Skills />
    </Container>
  );
}
