import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';
import BackgroundStars from '@components/BackgroundStars';
import { MenuContext, GlobalContext } from '@contexts';
import { StaticImagesService } from '@services';
import { useIsOpened, useQueryStaticImages } from '@hooks';

import styles from './Layout.module.scss';
import './Layout.scss';

const Layout = ({ children }) => {
  const menuState = useIsOpened();
  const globalState = {
    imagesAPI: new StaticImagesService(useQueryStaticImages()),
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <MenuContext.Provider value={menuState}>
        <BackgroundStars />
        {/* TODO: This is very bad, I know. But. */}
        {menuState.isOpened ? (
          <Helmet>
            <body className="body-inside menu--open"></body>
          </Helmet>
        ) : null}
        <div className={styles.container} id="wrapper">
          <div className={styles.header}>
            <Header />
          </div>
          <main className={`${styles.main} hiddenable`}>{children}</main>
          <div className={`${styles.footer} hiddenable`}>
            <Footer />
          </div>
        </div>
      </MenuContext.Provider>
    </GlobalContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
