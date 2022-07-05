import LatestBlogPost from "../components/LatestBlogPost";

import styles from "./LandingDiv.module.css";

const LandingDiv = () => {
  return (
    <div className={styles.container}>
      <LatestBlogPost />
    </div>
  );
};

export default LandingDiv;
