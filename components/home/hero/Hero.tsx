// import Image from "next/image";
// import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
// import Profile from "@/public/jc.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              <span>Navneet</span> <br /> Kumar
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Software Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
            Passionate Software Developer proficient in React.Js, Node.Js, React Native, JavaScript, MySQL, MongoDB, HTML, CSS, Bootstrap, Wordpress, and Zoho Creator. Experienced in building scalable web applications, optimizing performance, and creating seamless user experiences. Let's collaborate to deliver impactful digital solutions!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        {/* Image will go here */}
      </div>
      <DotGrid />
    </section>
  );
};

