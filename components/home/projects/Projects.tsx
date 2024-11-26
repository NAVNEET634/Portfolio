import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Amazon Clone",
    imgSrc: "/project-imgs/amazon-clone.JPG",
    code: "https://github.com/navneet634/amazon-clone",
    projectLink: "https://navneet634.github.io/amazon-clone/",
    tech: ["React", "CSS", "HTML"],
    description: "A sleek and high-performance landing page for Amazon.",
    modalContent: (
      <>
        <p>
          Exhibited mastery in crafting visually appealing and user-friendly
          interfaces, evident in the sleek design of the Amazon landing page.
        </p>
        <p>
          Ensured optimal performance and smooth user experience through
          meticulous attention to detail and streamlined functionality.
        </p>
      </>
    ),
  },
  {
    title: "Dribble Clone",
    imgSrc: "/project-imgs/dribble-mockup.jpg",
    code: "https://github.com/navneet634/dribble-clone",
    projectLink: "https://navneet634.github.io/dribble-clone/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a frontend clone of a Dribbble design to replicate the original aesthetic and functionality.",
    modalContent: (
      <>
        <p>
          Recreated the intricate design elements and interactive features of a
          Dribbble design, demonstrating proficiency in frontend development.
        </p>
        <p>
          Focused on maintaining fidelity to the original design while ensuring
          cross-browser compatibility and responsive layout for seamless user
          experience.
        </p>
      </>
    ),
  },
  {
    title: "DOG API",
    imgSrc: "/project-imgs/dog-list.JPG",
    code: "https://github.com/navneet634/dogapiassignment",
    projectLink: "https://navneet634.github.io/RandomI",
    tech: ["React", "HTML", "CSS", "Responsive Design", "JS "],
    description:
      "A captivating landing page for DOG List, featuring stunning CSS and responsive design.",
    modalContent: (
      <>
        <p>
          Designed an immersive and visually appealing DOG AI page that
          showcases DOG Lists having diffrent breeds&apos; tour offerings
          through captivating and responsive layout.
        </p>
        <p>
          Demonstrated expertise in frontend development by seamlessly
          integrating HTML and CSS to create a dynamic and engaging user
          experience for visitors interested in DOGs tours.
        </p>
      </>
    ),
  },
  {
    title: "Carousel Effect",
    imgSrc: "/project-imgs/choclate.JPG",
    code: "https://github.com/navneet634/Carousel_Choclate",
    projectLink: "https://navneet634.github.io/Carousel_Choclate/",
    tech: ["HTML", "CSS", "CSS Animations", "Carousel", "Responsive Design"],
    description:
      "A landing page for Med Connection, a medical institute, focusing on seamless user experience and informative content.",
    modalContent: (
      <>
        <p>
          Developed a responsive and product carousel to showcase featured
          products. The carousel should automatically rotate through the
          featured products and allow for manual navigation as well.
          <ul>
            <li>Displayed a customizable product carousel on the homepage</li>
            <li>
              Enabled automatic rotation of featured products, with the option
              for manual navigation using arrow buttons.
            </li>
            <li>
              The carousel is a responsive and visually appealing across various
              screen sizes and devices.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  
];
