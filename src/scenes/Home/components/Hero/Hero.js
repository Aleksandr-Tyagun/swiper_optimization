import React from 'react';

import Info from './components/Info';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>
          <span>Design driven </span>
          <br />
          development of your <br />
          <span>web product</span> for years.
        </h2>
        <div className={styles.subtitle}>
          Design is not just what it looks like. Design is how it works!” —
          Steve Jobs
        </div>
      </div>

      <Info />
    </section>
  );
};

export default Hero;
