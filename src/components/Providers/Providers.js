import React from 'react';
import PropTypes from 'prop-types';

import { MenuContext, GlobalContext } from '@contexts';
import { StaticImagesService } from '@services';
import { useIsOpened, useQueryStaticImages } from '@hooks';

const Providers = ({ children }) => {
  const menuState = useIsOpened();
  const globalState = {
    imagesAPI: new StaticImagesService(useQueryStaticImages()),
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
    </GlobalContext.Provider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
