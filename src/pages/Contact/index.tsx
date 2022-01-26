import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";

type InfoContactProps = {
  contact: {
    typeContact: string;
    class: string;
    href: string;
  };
};

export default function Contact() {
  return (
    <Section id="Contact">
      <PageTitle title="Contact" />
      <Styled.Text>
        I am open to <span>new career opportunities</span> that will allow me to
        grow as a person and professional in the sector.
      </Styled.Text>
      <Styled.ContactContainer>
        {contactData.map((contact) => (
          <InfoContact key={contact.typeContact} contact={contact} />
        ))}
      </Styled.ContactContainer>
    </Section>
  );
}

function InfoContact({ contact }: InfoContactProps) {
  return (
    <div>
      <i className={contact.class} />
      <a href={contact.href} rel="noreferrer" target="_blank">
        {contact.typeContact}
      </a>
    </div>
  );
}

const contactData = [
  {
    typeContact: "Linkedin",
    class: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/adrian-hervas-martinez/",
  },
  {
    typeContact: "Email",
    class: "fas fa-envelope",
    href: "mailto:adrian.hervasmartinez@gmail.com",
  },
  {
    typeContact: "Github",
    class: "fab fa-github",
    href: "https://github.com/adrianhm13",
  },
];
