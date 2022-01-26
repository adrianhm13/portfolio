import * as Styled from "./styled";
import MockupReddit from "../../assets/images/MOCKUP_REDDIT_CLONE.png";
import MockupDiary from "../../assets/images/MOCKUP_PERSONAL_DIARY.png";
import MockupFoodDelivery from "../../assets/images/Mockup_Food_Delivery.png";

export const badges = {
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

export const projects = [
  {
    title: "Reddit Clone",
    picture: MockupReddit,
    explanation: (
      <Styled.ContentDetails>
        <span>Red Fake</span> its a clone of the site <span>Reddit</span> which
        it's a network of communities where people can dive into their
        interests, hobbies and passions.
        <ul>
          <li>
            The user it's able to <span>create a community.</span>
          </li>
          <li>
            <span>Create posts</span> within the community, share your thoughts!
          </li>
          <li>
            A <span>searchbar</span> to find the community you want.
          </li>
          <li>
            <span>Comments system</span>, the user can comment posts and reply
            these comments.
          </li>
          <li>
            You can <span>upvote or downvote</span> any post or comment.
          </li>
          <li>
            <span>Subscription</span> to communities, if you are subscribed, you
            will see it in the dropdown while login.
          </li>
        </ul>
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        One of the biggest challenges of this project was the idea of working
        with <span>Firebase</span>. Grouping the data in a way that was
        accessible to the different functionalities that I have implemented to
        the project. <br />
        <span>The use of Emotion</span> was also remarkable, as it has allowed
        me to learn the use of styled components and strengthen my CSS
        knowledge.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.javascript,
      badges.emotion,
      badges.firebase,
    ],
    links: {
      source: "https://github.com/adrianhm13/reddit-clone",
      preview: "https://reddit-clone-59235.web.app/",
    },
  },
  {
    title: "Food Delivery",
    picture: MockupFoodDelivery,
    explanation: (
      <Styled.ContentDetails>
        An application to order food online with an eye-catching design. The
        following <span>features</span> are implemented in the application:
        <ul>
          <li>
            <span>Signup system</span> to login and logout.
          </li>
          <li>
            <span>Shop system</span> which you can add the product you want to
            the cart with <span>different options</span>
          </li>
        </ul>
        <br />
        I'm working in the <span>next features</span>:
        <ul>
          <li>
            Admin Dashboard:
            <ul>
              <li>
                <span>Handle orders</span> from an admin account
              </li>
              <li>Sales report represented by a <span>graphic</span></li>
            </ul>
          </li>
          <li style={{ marginTop: "1rem" }}>
            User Dashboard:
            <ul>
              <li>
                The user will be able to <span>change his address</span>.
              </li>
              <li>
                Orders page to see <span>the status of the order</span> along
                the previous orders that the user has made.
              </li>
            </ul>
          </li>
        </ul>
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        I decided to take the opportunity to <span>learn Typescript</span> with
        this project, it has been a challenge to work with typescript, but it
        has given me a different point of view while working with
        it. The main advantage is that it gives me{" "}
        <span>better confidence</span> in knowing what kind of information I'm
        working with. I can also use this information as{" "}
        <span>documentation</span>.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.typescript,
      badges.materialUI,
      badges.firebase,
    ],
    links: {
      source: "https://github.com/adrianhm13/food-delivery",
      preview: "https://food-delivery-3d3f4.web.app/",
    },
  },
  {
    title: "Personal Diary",
    picture: MockupDiary,
    explanation: (
      <Styled.ContentDetails>
        Personal Diary it's an application that simulates a{" "}
        <span>personal diary</span>. You can write your thoughts, quotes,
        everything that pops into your mind. The entries are{" "}
        <span>restricted</span> to be written and read <span>by the user</span>{" "}
        that has created them. You can create an entry with a form and add some
        color to make them unique.
      </Styled.ContentDetails>
    ),
    challenges: (
      <Styled.ContentDetails>
        This project was one of the first apps in which I started using{" "}
        <span>Firebase</span>, the platform for{" "}
        <span>database creation and administration</span>. On the visual side,
        it was the first time I used <span>Bootstrap</span> for the layout, so I
        had to adapt myself to use this kind of framework to style
        the application.
      </Styled.ContentDetails>
    ),
    technologies: [
      badges.react,
      badges.javascript,
      badges.bootstrap,
      badges.firebase,
    ],
    links: {
      source: "https://github.com/adrianhm13/my-diary",
      preview: "https://diary-dd0de.web.app/",
    },
  },
];
