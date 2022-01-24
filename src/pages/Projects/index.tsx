import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";
import MockupReddit from "../../assets/images/MOCKUP_REDDIT_CLONE.png";
import MockupDiary from "../../assets/images/MOCKUP_PERSONAL_DIARY.png";
import MockupFoodDelivery from "../../assets/images/Mockup_Food_Delivery.png";
import Badge from "../../components/Badge";
import { Button } from "../../components/Button/styled";

type Project = {
  title: string;
  picture: string;
  explanation: JSX.Element;
  challenges: JSX.Element;
  technologies: {
    title: string;
    src: string;
  }[];
};
type ProjectViewProps = {
  project: Project;
};

function ProjectView({ project }: ProjectViewProps) {
  return (
    <Styled.ProjectContainer>
      <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
      <Styled.ProjectContent>
        <Styled.ImageContainer>
          <img src={project.picture} alt="project mockup" />
          {project.technologies.map((technology) => (
            <Badge title={technology.title} url={technology.src} />
          ))}
        </Styled.ImageContainer>
        <Styled.ProjectInformation>
          <div>
            <Styled.TitleDetails>What is it?</Styled.TitleDetails>
            <Styled.ContentDetails>{project.explanation}</Styled.ContentDetails>
          </div>
          <hr />
          <div>
            <Styled.TitleDetails>Challenges</Styled.TitleDetails>
            <Styled.ContentDetails>{project.challenges}</Styled.ContentDetails>
          </div>
        </Styled.ProjectInformation>
        <Styled.ButtonsContainer>
          <Button href="lala">Source</Button>
          <Button>Live Demo</Button>
        </Styled.ButtonsContainer>
      </Styled.ProjectContent>
    </Styled.ProjectContainer>
  );
}

export default function Projects() {
  return (
    <Section id="Projects">
      <PageTitle title={"Projects"} />
      {projects.map((project) => (
        <ProjectView project={project} />
      ))}
    </Section>
  );
}

const badges = {
  typescript: {
    title: "Typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  javascript: {
    title: "Javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  html5: {
    title: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  css3: {
    title: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  react: {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  emotion: {
    title: "Emotion",
    src: "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png",
  },
  materialUI: {
    title: "MaterialUI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  bootstrap: {
    title: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  firebase: {
    title: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  git: {
    title: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
};

const projects = [
  {
    title: "Reddit Clone",
    picture: MockupReddit,
    explanation: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.javascript,
      badges.emotion,
      badges.firebase,
    ],
  },
  {
    title: "Food Delivery",
    picture: MockupFoodDelivery,
    explanation: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.typescript,
      badges.materialUI,
      badges.firebase,
    ],
  },
  {
    title: "Personal Diary",
    picture: MockupDiary,
    explanation: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        Lorem ipsum dolor <span>ipsum</span> sit amet, consectetur adipiscing
        elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam
        tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec
        interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent
        sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet
        sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.javascript,
      badges.bootstrap,
      badges.firebase,
    ],
  },
];
