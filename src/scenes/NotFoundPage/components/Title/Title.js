import React from 'react';
import { Link } from 'gatsby';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p className={styles.text}>
          Gosh, it seems like page you’re looking for has been absorbed.
        </p>
        <Link to="/" className={styles.link}>
          Let’s move out
        </Link>
      </div>
    </div>
  );
};

export default Title;
