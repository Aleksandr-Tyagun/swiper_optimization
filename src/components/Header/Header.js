import React, { useContext } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { MenuContext } from '@contexts';
import { useHeaderAssets } from '@hooks/queries';
import Menu from './components/Menu';

import styles from './Header.module.scss';

import { ReactSVG } from 'react-svg';

const Header = ({ headerIsWhite, forwardedRef, backgroundGradient }) => {
  const { logotype } = useHeaderAssets();
  const { isOpened, handleTogglingIsOpened } = useContext(MenuContext);

  const menuStatus = isOpened ? 'opened' : 'closed';
  const barStyles = classNames(styles.bar, 'pageWrapper');
  const headerStyles = classNames(styles.container, {
    [styles.isWhite]: headerIsWhite && !isOpened,
  });

  const setBackgroundGradient = classNames(headerStyles, {
    [styles.gradientIsRemoved]: backgroundGradient,
  });

  return (
    <div className={setBackgroundGradient} ref={forwardedRef} data-atr="3">
      <div className={barStyles}>
        <div className={styles.logotype}>
          <Link to="/">
            <ReactSVG src={logotype.publicURL} />
          </Link>
        </div>

        <Link
          to="/contacts/"
          className={styles.contact}
          data-status={menuStatus}
        >
          Contact
        </Link>

        {isOpened ? <Menu /> : null}

        <div className={styles.menuBar}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={handleTogglingIsOpened}
          >
            <span className={styles.menuIcon} data-status={menuStatus}></span>
            <span className={styles.hiddenTitle}>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  headerIsWhite: PropTypes.bool,
  forwardedRef: PropTypes.object,
  backgroundGradient: PropTypes.bool,
};
