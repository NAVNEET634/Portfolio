import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect!
            You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/navneet-kumar-a8b3a01bb"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://github.com/navneet634"
              target="_blank"
              rel="nofollow"
            >
              Github
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactAccent}>navneetkumar92042@gmail.com</p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:navneetkumar92042@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="3rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
