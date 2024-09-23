import React from "react";
import styles from "./SliderEducation.module.css";

const SliderEducation: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center  p-6 ">
      <div className={styles.slideItem}>
        <span className={styles.nameItem}> Block 1</span>
      </div>
      <div className={styles.slideItem}>Block 2</div>
      <div className={styles.slideItem}>Block 3</div>
      <div className={styles.slideItem}>Block 4</div>
    </div>
  );
};

export default SliderEducation;
