import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';
import styles from './Item.module.scss';

const Item = ({ author, generalLogo, rating, stars, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <span className={styles.mark}>{rating}</span>
        <img src={stars.publicURL} alt="stars" className={styles.stars} />
        <img
          src={generalLogo.publicURL}
          alt="general logotype"
          className={styles.generalLogo}
        />
      </div>
      <div className={styles.review}>
        <div className={styles.text}>{text}</div>
        <div className={`${styles.name} ${styles.top}`}>- {author}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  author: PropTypes.string,
  companyLogo: PropTypes.object,
  generalLogo: PropTypes.object,
  rating: PropTypes.string,
  stars: PropTypes.object,
  text: PropTypes.string,
};

export default Item;
