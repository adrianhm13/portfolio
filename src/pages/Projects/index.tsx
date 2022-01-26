import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";
import Badge from "../../components/Badge";
import { Button } from "../../components/Button/styled";
import { projects } from "./ProjectsData";

type Project = {
  title: string;
  picture: string;
  explanation: JSX.Element;
  challenges: JSX.Element;
  technologies: {
    title: string;
    src: string;
  }[];
  links: {
    source: string;
    preview: string;
  };
};
type ProjectViewProps = {
  project: Project;
};

type ImagePresentationProps = {
  image: string;
  technologies: {
    title: string;
    src: string;
  }[];
};

type ProjectInformationProps = {
  explanation: JSX.Element;
  challenges: JSX.Element;
};
export default function Projects() {
  return (
    <Section id="Projects">
      <PageTitle title={"Projects"} />
      {projects.map((project) => (
        <ProjectView key={project.title} project={project} />
      ))}
    </Section>
  );
}

function ProjectView({ project }: ProjectViewProps) {
  return (
    <Styled.ProjectContainer>
      <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
      <Styled.ProjectContent>
        <ImagePresentation
          image={project.picture}
          technologies={project.technologies}
        />
        <ProjectInformation
          explanation={project.explanation}
          challenges={project.challenges}
        />
        <Styled.ButtonsContainer>
          <Button href={project.links.source} target="_blank">
            Source Code
          </Button>
          <Button href={project.links.preview} target="_blank">
            Live Demo
          </Button>
        </Styled.ButtonsContainer>
      </Styled.ProjectContent>
    </Styled.ProjectContainer>
  );
}

function ImagePresentation({ image, technologies }: ImagePresentationProps) {
  return (
    <Styled.ImageContainer>
      <img src={image} alt="project mockup" />
      {technologies.map((technology) => (
        <Badge
          key={technology.title}
          title={technology.title}
          url={technology.src}
        />
      ))}
    </Styled.ImageContainer>
  );
}

function ProjectInformation({
  explanation,
  challenges,
}: ProjectInformationProps) {
  return (
    <Styled.ProjectInformation>
      <div>
        <Styled.TitleDetails>What is it?</Styled.TitleDetails>
        {explanation}
      </div>
      <hr />
      <div>
        <Styled.TitleDetails>Challenges</Styled.TitleDetails>
        {challenges}
      </div>
    </Styled.ProjectInformation>
  );
}

