import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { GET_ALL_DRIBBBLE_SHOT } from '@queries';

import styles from './List.module.scss';

const List = () => {
  const data = useStaticQuery(GET_ALL_DRIBBBLE_SHOT);
  const items = data.allDribbbleShot.nodes;

  const stepValue = 8;
  const [numberOfRendered, setNumberOfRendered] = useState(stepValue);
  const handleSetNumberOfRendered = () => {
    setNumberOfRendered(numberOfRendered + stepValue);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          return numberOfRendered > index ? (
            <li key={index} className={styles.item}>
              <a
                href={item.url}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={item.localCover.childImageSharp.fluid} />
              </a>
            </li>
          ) : null;
        })}
      </ul>
      <div className={styles.buttonWrapper}>
        {numberOfRendered >= items.length ? (
          <a
            href="https://dribbble.com/halolab"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            SEE ALL
          </a>
        ) : (
          <button className={styles.button} onClick={handleSetNumberOfRendered}>
            INSPIRE MORE
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.3728 4.89485C14.6027 3.06646 13.1808 1.58942 11.383 0.750478C9.58513 -0.088466 7.53972 -0.229462 5.64379 0.354862C3.74786 0.939185 2.13668 2.20714 1.12303 3.91257C0.109384 5.61801 -0.234411 7.63925 0.158387 9.58391C0.551186 11.5286 1.65255 13.2579 3.24868 14.4362C4.8448 15.6145 6.82181 16.1577 8.7959 15.9603C10.77 15.7629 12.6003 14.8391 13.9316 13.3681C15.2628 11.8971 16 9.98395 16 8.00001C16.0014 6.93336 15.7881 5.87734 15.3728 4.89485ZM11.7274 9.31642L8.65843 12.3853C8.49 12.5538 8.26156 12.6484 8.02337 12.6484C7.78518 12.6484 7.55674 12.5538 7.38831 12.3853L4.31938 9.31647C4.23599 9.23307 4.16983 9.13406 4.1247 9.0251C4.07956 8.91614 4.05633 8.79935 4.05633 8.68141C4.05633 8.56347 4.07956 8.44668 4.1247 8.33771C4.16983 8.22875 4.23599 8.12974 4.31938 8.04635C4.40278 7.96295 4.50179 7.89679 4.61075 7.85166C4.71972 7.80653 4.8365 7.78329 4.95445 7.78329C5.07239 7.78329 5.18917 7.80653 5.29814 7.85166C5.4071 7.89679 5.50611 7.96295 5.58951 8.04635L7.12529 9.58213V4.2497C7.12529 4.0115 7.21991 3.78307 7.38834 3.61464C7.55677 3.44621 7.7852 3.35159 8.0234 3.35159C8.26159 3.35159 8.49003 3.44621 8.65845 3.61464C8.82688 3.78307 8.9215 4.0115 8.9215 4.2497V9.58213L10.4573 8.04635C10.5407 7.96295 10.6397 7.89679 10.7487 7.85166C10.8576 7.80653 10.9744 7.78329 11.0923 7.78329C11.2103 7.78329 11.3271 7.80653 11.436 7.85166C11.545 7.89679 11.644 7.96295 11.7274 8.04635C11.8108 8.12974 11.877 8.22875 11.9221 8.33771C11.9672 8.44668 11.9905 8.56347 11.9905 8.68141C11.9905 8.79935 11.9672 8.91614 11.9221 9.0251C11.877 9.13406 11.8108 9.23307 11.7274 9.31647L11.7274 9.31642Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
