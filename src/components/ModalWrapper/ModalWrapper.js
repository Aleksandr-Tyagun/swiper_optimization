import React from 'react';
import PropTypes from 'prop-types';

import { useIsOpened } from '@hooks/index';

import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children, button: Button }) => {
  const { isOpened, handleTogglingIsOpened } = useIsOpened();
  const onWrapperClick = ({ target }) => {
    const isWrapper = target.getAttribute('data-name') === 'modalWrapper';

    if (isWrapper) {
      handleTogglingIsOpened();
    }
  };

  return (
    <>
      <Button onClick={handleTogglingIsOpened} />
      {isOpened ? (
        <div
          className={styles.wrapper}
          data-name="modalWrapper"
          onClick={onWrapperClick}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

ModalWrapper.propTypes = {
  button: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
