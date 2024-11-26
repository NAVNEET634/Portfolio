import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiFillCode, AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi there! I'm an experienced Full Stack Developer with a proven track
              record in the IT sector. I specialize in building robust, scalable, and
              efficient solutions using a variety of technologies, including React.js,
              Node.js, React Native, JavaScript, HTML, CSS, MySQL, MongoDB, PHP, WordPress,
              and Zoho Creator.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My expertise spans across the full software development lifecycle, from crafting responsive front-end designs
              to optimizing back-end performance and database management. I ensure seamless functionality and high-quality
              outcomes in all projects I work on.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I thrive in both application development and support. Whether it’s resolving complex technical challenges,
              providing post-deployment support, or performing performance tuning, I ensure uninterrupted functionality and
              superior user experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I'm committed to staying ahead of industry trends, including machine learning and emerging technologies.
              I continuously research and implement best practices to bring innovative and efficient solutions to the
              teams I collaborate with.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My technical skill set includes advanced proficiency in PHP, WordPress, Zoho Creator, functional programming,
              cross-browser compatibility, and web performance optimization. I excel in building accessible, user-friendly
              websites and applications that meet diverse business requirements.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you're looking for a versatile Full Stack Developer who excels at both development and ongoing support,
              let's work together to turn your ideas into high-quality, maintainable digital solutions!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.statColumn}>
              <h4>
                <AiFillCode size="3rem" color="var(--brand-1)" />
                <span>Things I can help you with:</span>
              </h4>
              <div className={styles.statGrid}>
                <span className="chip">Full Stack Development</span>
                <span className="chip">Application Development</span>
                <span className="chip">Application Support</span>
                <span className="chip">Database Optimization</span>
                <span className="chip">API Development</span>
                <span className="chip">Responsive Web Design</span>
                <span className="chip">Web Performance Optimization</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
