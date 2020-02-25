import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';
import styles from './Item.module.scss';

const Item = ({ author, companyLogo, generalLogo, rating, stars, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.review}>
        <div className={styles.rating}>
          <span>{rating}</span>
          <img src={stars.publicURL} />
        </div>
        <div className={styles.text}>&#34;{text}&#34;</div>
      </div>
      <div className={styles.author}>
        <img src={generalLogo.publicURL} className={styles.generalLogo} />
        <span className={styles.name}>- {author}</span>
        <img src={companyLogo.publicURL} className={styles.companyLogo} />
      </div>
    </div>
  );

  // return (
  //   <div className="testimonials__item">
  //     <div className="testimonials__item-body">
  //       <div className="testimonials__item-header">
  //         <span>{rating}</span>
  //         <img src={stars.url} alt={stars.name} />
  //       </div>
  //       <div className="testimonials__item-text">&#34;{text}&#34;</div>
  //       <div className="testimonials__item-author">— {author}</div>
  //     </div>
  //     <a href="#" className="testimonials__item-footer">
  //       <div className="testimonials__item-author">
  //         <img src={clutch.url} alt={clutch.name} />
  //         <span>— {author}</span>
  //       </div>
  //       <div className="testimonials__item-logo">
  //         <img src={companyLogo.url} alt={companyLogo.name} />
  //       </div>
  //     </a>
  //   </div>
  // );
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
