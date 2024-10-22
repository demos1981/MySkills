import React from "react";
import styles from "./SocialLink.module.css";

const SocialLink = () => {
  return (
    <div className="flex flex-row">
      <div className={styles.socialLink}>Telegram</div>
      <div className={styles.socialLink}>Github</div>
      <div className={styles.socialLink}>Linkedin</div>
    </div>
  );
};

export default SocialLink;
