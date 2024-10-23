import React from "react";
import styles from "./SocialLink.module.css";
import Image from "next/image";

const SocialLink = () => {
  return (
    <div className="flex flex-row">
      <div className={styles.socialLink}>Telegram</div>
      <div className={styles.socialLink}>Github</div>
      <div className={styles.socialLink}>Linkedin</div>
      <div className="image">
        <Image
          width={800}
          height={800}
          src="/assets/education.svg"
          alt="picture"
        />
      </div>
    </div>
  );
};

export default SocialLink;
