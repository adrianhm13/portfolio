import * as Styled from "./styled";
import Section from "../../components/Section";
import PageTitle from "../../components/PageTitle";

export default function About() {
  return (
    <Section id="About">
      <PageTitle title="About" />
      <Styled.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
        sodales elit sit amet pretium. Aliquam ultrices auctor purus ac cursus.
        Proin lobortis diam enim, ac rhoncus risus eleifend ut. Cras iaculis
        ornare bibendum. <br />
        <br />
        Aliquam feugiat erat leo, nec ultrices sem rhoncus ut. Cras a euismod
        tortor. Vestibulum risus purus, hendrerit non mauris quis, ullamcorper
        viverra magna. Nunc nec libero eu ligula aliquam maximus non non est.
        Donec venenatis auctor ex. <br />
        <br />
        Nam et mauris rhoncus, mollis neque non, porttitor urna.
      </Styled.Text>
    </Section>
  );
}
