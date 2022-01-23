import PageTitle from "../../components/PageTitle";
import Section from "../../components/Section";
import * as Styled from "./styled";
import MockupReddit from "../../assets/images/MOCKUP_REDDIT_CLONE.png";
import MockupDiary from '../../assets/images/MOCKUP_PERSONAL_DIARY.png'
import MockupFoodDelivery from '../../assets/images/Mockup_Food_Delivery.png'
import Badge from "../../components/Badge";

export default function Projects() {
  return (
    <Section id="Projects">
      <PageTitle title={"Projects"} />
      <Styled.ProjectContainer>
        <Styled.ProjectTitle>Reddit Clone</Styled.ProjectTitle>
        <Styled.ProjectContent>
          <Styled.ImageContainer>
            <img src={MockupReddit} alt="project mockup" />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="HTML5"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            />
          </Styled.ImageContainer>
          <Styled.ProjectInformation>
            <div>Explanation<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.</div>
            <hr/>
            <div>Challenges<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
          </div>
          </Styled.ProjectInformation>
        </Styled.ProjectContent>
      </Styled.ProjectContainer>
      <Styled.ProjectContainer>
        <Styled.ProjectTitle>Food Delivery</Styled.ProjectTitle>
        <Styled.ProjectContent>
          <Styled.ImageContainer>
            <img src={MockupFoodDelivery} alt="project mockup" />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="HTML5"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            />
          </Styled.ImageContainer>
          <Styled.ProjectInformation>
            <div>Explanation<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.</div>
            <hr/>
            <div>Challenges<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
          </div>
          </Styled.ProjectInformation>
        </Styled.ProjectContent>
      </Styled.ProjectContainer>
      <Styled.ProjectContainer>
        <Styled.ProjectTitle>Personal Diary</Styled.ProjectTitle>
        <Styled.ProjectContent>
          <Styled.ImageContainer>
            <img src={MockupDiary} alt="project mockup" />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="Typescript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <Badge
              title="HTML5"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            />
          </Styled.ImageContainer>
          <Styled.ProjectInformation>
            <div>Explanation<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.</div>
            <hr/>
            <div>Challenges<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ante convallis, bibendum quam vitae, accumsan nibh. Aliquam tincidunt tristique odio, nec ornare justo lacinia sollicitudin. Donec interdum est non leo luctus tristique. Etiam eu cursus velit. Praesent sollicitudin posuere rutrum. Vestibulum non enim dolor. Morbi sit amet sapien blandit, vestibulum justo eget, mollis leo. Nam eget odio quam.
          </div>
          </Styled.ProjectInformation>
        </Styled.ProjectContent>
      </Styled.ProjectContainer>
    </Section>
  );
}
