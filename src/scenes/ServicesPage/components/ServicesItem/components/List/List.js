import React from 'react';
import PropTypes from 'prop-types';

import Slider from '@components/Slider';
import Item from './components/Item';
import { useGetBreakpoint } from '@hooks';

import styles from './List.module.scss';

const List = ({ items }) => {
  const { breakpoint } = useGetBreakpoint();

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      {breakpoint === 'desktop' || breakpoint === 'tablet' ? (
        <ul className={styles.list}>
          {items.map((item, index) => {
            return (
              <li key={index} className={styles.listItem}>
                <Item {...item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.wrapper}>
          <Slider settings={settings}>
            {items.map((item, index) => {
              return <Item key={index} {...item} />;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
