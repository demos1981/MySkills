import React from "react";
import styles from "./SliderEducation.module.css";

const SliderEducation: React.FC = () => {
  return (
    <div className={styles.slide}>
      <div className="flex flex-col mr-4">
        <div className={styles.slide_button}>FrontEnd</div>
        <div className={styles.slide_content}>FrontEnd</div>
        <div className={styles.slide_item}></div>
      </div>
      <div className="flex flex-col mr-4">
        <div className={styles.slide_button}>FrontEnd Pro</div>
        <div className={styles.slide_content}>FrontEnd Pro</div>
        <div className={styles.slide_item}></div>
      </div>
      <div className="flex flex-col mr-4">
        <div className={styles.slide_button}>TypeScript</div>
        <div className={styles.slide_content}>TypeScript</div>
        <div className={styles.slide_item}></div>
      </div>
      <div className="flex flex-col mr-4">
        <div className={styles.slide_button}>Node</div>
        <div className={styles.slide_content}>Node</div>
        <div className={styles.slide_item}></div>
      </div>
    </div>
  );
};

export default SliderEducation;
