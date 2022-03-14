import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";

export default function Skills() {
  return (
    <Section id="Skills">
      <PageTitle title="Skills" />
      <SkillsLanguage />
      <SkillsFrameworks />
      <SkillsTools />
    </Section>
  );
}

type SkillItemProps = {
  skill: string;
  badge: string;
};

function SkillItem(props: SkillItemProps) {
  const { skill, badge } = props;
  return (
    <Styled.SkillCard>
      <img src={badge} alt="skill" />
      {skill}
    </Styled.SkillCard>
  );
}

function SkillsLanguage() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>Languages</Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsLanguage.map((skillLanguage) => (
          <SkillItem
            key={skillLanguage.skill}
            skill={skillLanguage.skill}
            badge={skillLanguage.badge}
          />
        ))}
      </Styled.SkillsList>
    </Styled.SkillsContainer>
  );
}

function SkillsFrameworks() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>
        Frameworks <span>&</span> Libraries
      </Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsFrameworks.map((skillFramework) => (
          <SkillItem
            key={skillFramework.skill}
            skill={skillFramework.skill}
            badge={skillFramework.badge}
          />
        ))}
      </Styled.SkillsList>
    </Styled.SkillsContainer>
  );
}

function SkillsTools() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>Tools</Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsTools.map((skillTool) => (
          <SkillItem
            key={skillTool.skill}
            skill={skillTool.skill}
            badge={skillTool.badge}
          />
        ))}
      </Styled.SkillsList>
    </Styled.SkillsContainer>
  );
}

const skillsLanguage = [
  {
    skill: "Typescript",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    skill: "Javascript",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    skill: "HTML5",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    skill: "CSS3",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
];
const skillsFrameworks = [
  {
    skill: "React",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skill: "Express",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    skill: "Emotion",
    badge:
      "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
  },
  {
    skill: "MaterialUI",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    skill: "Bootstrap",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
];
const skillsTools = [
  {
    skill: "Node.js",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    skill: "MongoDB",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    skill: "Heroku",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
  },
  {
    skill: "Firebase",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    skill: "Git",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    skill: "NPM",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];
