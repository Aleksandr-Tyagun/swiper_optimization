import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './Others.module.scss';

const Others = ({ jackAndJones, kklLuzern, udemy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>And</span> <br />
        <span>others</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={jackAndJones.publicURL} alt="partner logotype" />
        </li>
        <li className={styles.item}>
          <img src={udemy.publicURL} alt="partner logotype" />
        </li>
        <li className={styles.item}>
          <img src={kklLuzern.publicURL} alt="partner logotype" />
        </li>
        <li className={styles.item}>
          <Link to="/portfolio" className={styles.link}>
            <span>
              View
              <br />
              All
              <br />
              Cases
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Others.propTypes = {
  jackAndJones: PropTypes.object,
  kklLuzern: PropTypes.object,
  udemy: PropTypes.object,
};

export default Others;
