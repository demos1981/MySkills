import React from "react";
import BlurText from "./BlurText";
import styles from "./SliderEducation.module.css";
import { slides } from "../../data/dataSlides";
import Link from "next/link";

const SliderEducation: React.FC = () => {
  return (
    <div className={styles.slide}>
      {slides.map((slide) => (
        <div key={slide.id} className=" mr-6">
          <div className={styles.slide_button}>{slide.title}</div>
          <div className={styles.slide_content}>{slide.content}</div>
          <div className={styles.slide_item}>
            <div className="flex flex-col w-16">
              <BlurText text={slide.text} className={styles.text} delay={200} />
              <div className={styles.linkCertificate}>
                <Link href={slide.url}>Certificate</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div className={styles.slide}>
    //   <div className="flex flex-col mr-4">
    //     <div className={styles.slide_button}>FrontEnd</div>
    //     <div className={styles.slide_content}>FrontEnd</div>
    //     <div className={styles.slide_item}></div>
    //   </div>
    //   <div className="flex flex-col mr-4">
    //     <div className={styles.slide_button}>FrontEnd Pro</div>
    //     <div className={styles.slide_content}>FrontEnd Pro</div>
    //     <div className={styles.slide_item}></div>
    //   </div>
    //   <div className="flex flex-col mr-4">
    //     <div className={styles.slide_button}>TypeScript</div>
    //     <div className={styles.slide_content}>TypeScript</div>
    //     <div className={styles.slide_item}></div>
    //   </div>
    //   <div className="flex flex-col mr-4">
    //     <div className={styles.slide_button}>Node</div>
    //     <div className={styles.slide_content}>Node</div>
    //     <div className={styles.slide_item}></div>
    //   </div>
    // </div>
  );
};

export default SliderEducation;
