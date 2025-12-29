import React from "react";
import { Link } from "react-router-dom";
import styles from "../Component/Styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.text}>
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link to="/" className={styles.homeBtn}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
