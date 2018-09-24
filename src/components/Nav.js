import React from "react";
import styles from "./Nav.css";
import { Link } from "dva/router";

function Nav() {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <Link to="/posts" className={styles.show} activeclassname={styles.hide}>
          Back to Index
        </Link>
      </div>
      <div className={styles.right}>
        <Link
          to="/posts/new"
          className={styles.show}
          activeclassname={styles.hide}
        >
          New Post
        </Link>
      </div>
    </div>
  );
}

export default Nav;
