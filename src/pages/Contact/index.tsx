import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";

export default function Contact() {
  return (
    <Section id="Contact">
      <PageTitle title="Contact" />
      <Styled.Text>
        I am open to <span>new career opportunities</span> that will allow me to
        grow as a person and as a worker in the sector.
      </Styled.Text>
      <Styled.ContactContainer>
        <div>
          <i className="fab fa-linkedin" />
          <a
            href="https://www.linkedin.com/in/adrian-hervas-martinez/"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div>
          <i className="fas fa-envelope" />
          <a
            href="mailto:adrian.hervasmartinez@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            Email
          </a>
        </div>
        <div>
          <i className="fab fa-github" />
          <a
            href="https://github.com/adrianhm13"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
      </Styled.ContactContainer>
    </Section>
  );
}
