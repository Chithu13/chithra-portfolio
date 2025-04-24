import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chithra</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 6 months of experience using React and
          NodeJS also more than 1 years of experience django angular with python trainer and 2 years of experience in Ecommerce, 2 years of experience in digital advertising. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:venkatchitra9@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
