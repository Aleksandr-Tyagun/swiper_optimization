import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';

const List = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map(({ title, items }, index) => {
        return (
          <li key={index} className={styles.item}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <ul className={styles.sublist}>
              {items.map(({ title, image }, index) => {
                return (
                  <li key={index} className={styles.subitem}>
                    <div className={styles.icon}>
                      <img src={image.url} alt={image.name} />
                    </div>
                    <div className={styles.subitemTitle}>{title}</div>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

List.defaultProps = {
  items: [],
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
