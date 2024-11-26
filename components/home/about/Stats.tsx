import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Languages & Libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React.JS</span>
            <span className="chip">Node.JS</span>
            <span className="chip">React Native</span>
            <span className="chip">JavaScript ( ES6+ )</span>
            <span className="chip">PHP (Basic)</span>
            <span className="chip">MySQL</span>
            \<span className="chip">MongoDB</span>
            <span className="chip">CSS</span>
            <span className="chip">HTML</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Wordpress</span>
            <span className="chip">Zoho Creator</span>

          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand-1)" />
            <span>Tools & Platforms</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Versal</span>
            <span className="chip">AWS</span>
            <span className="chip">Android Studio</span>
            <span className="chip">Xcode IDE</span>
            <span className="chip">Visual Studio</span>
            <span className="chip">Visual Studio Code</span>
            <span className="chip">Windows</span>
            <span className="chip">MacOS</span>
            <span className="chip">Ubuntu</span>
            <span className="chip">Linux</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
