import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";

export default function Skills() {
  return (
    <Section id="Skills">
      <PageTitle title="Skills" />
      <SkillsLanguage />
      <SkillsFrontend />
      <SkillsBackend />
      <SkillsUILibraries />
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

function SkillsFrontend() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>Front-End</Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsFrontend.map((skillFrontend) => (
          <SkillItem
            key={skillFrontend.skill}
            skill={skillFrontend.skill}
            badge={skillFrontend.badge}
          />
        ))}
      </Styled.SkillsList>
    </Styled.SkillsContainer>
  );
}

function SkillsUILibraries() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>UI Libraries</Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsUILibraries.map((skillUILibrary) => (
          <SkillItem
            key={skillUILibrary.skill}
            skill={skillUILibrary.skill}
            badge={skillUILibrary.badge}
          />
        ))}
      </Styled.SkillsList>
    </Styled.SkillsContainer>
  );
}

function SkillsBackend() {
  return (
    <Styled.SkillsContainer>
      <Styled.SkillsCategory>Back-End</Styled.SkillsCategory>
      <Styled.SkillsList>
        {skillsBackend.map((skillBackend) => (
          <SkillItem
            key={skillBackend.skill}
            skill={skillBackend.skill}
            badge={skillBackend.badge}
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
const skillsFrontend = [
  {
    skill: "React",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skill: "Vue.js",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
];
const skillsUILibraries = [
  {
    skill: "MaterialUI",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    skill: "Emotion",
    badge:
      "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
  },

  {
    skill: "Bootstrap",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
];
const skillsBackend = [
  {
    skill: "Express",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
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
    skill: "Firebase",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];
const skillsTools = [
  {
    skill: "Redux",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    skill: "Heroku",
    badge:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
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
