import latestImg from "../img/latestImg.png";

import styles from "./LatestBlogPost.module.css";
import globalStyles from "../App.module.css";

const LatestBlogPost = () => {
  return (
    <div className={`${globalStyles.flex_row} ${styles.blogPost}`}>
      <img src={latestImg}></img>
      <div className={styles.container__text}>
        <h3 className={styles.header}>LATEST...</h3>
        <p className={styles.text}>
          Introducing new red wine, Saperavi Reserve which is aged in Oak for 2
          years. The wine...
        </p>
      </div>
    </div>
  );
};

export default LatestBlogPost;
