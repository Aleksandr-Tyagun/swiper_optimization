import React, { useContext } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import { MenuContext } from '@contexts';
import { useHeaderAssets } from '@hooks/queries';
import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = ({headerIsWhite}) => {
  const { logotype } = useHeaderAssets();
  const { isOpened, handleTogglingIsOpened } = useContext(MenuContext);

  const menuStatus = isOpened ? 'opened' : 'closed';

  const barStyles = classNames(styles.bar, 'pageWrapper');
  const headerStyles = classNames(styles.container, {[styles.isWhite]: headerIsWhite && !isOpened})
  return (
    <div className={headerStyles}>
      <div className={barStyles}>
        <div className={styles.logotype}>
          <Link to="/">
            <ReactSVG
              src={logotype.publicURL}
            />
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
