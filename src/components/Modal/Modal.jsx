import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = useCallback(
    e => {
      if (e.target === e.currentTarget ||
        (e.code === 'Escape' && isOpen) ||
        (e.target.dataset.close)) {
        setTimeout(() => {
          onClose();
        }, 200);
        setShowModal(false);
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setShowModal(true);
      document.addEventListener('keydown', handleModalClose);
      return () => document.removeEventListener('keydown', handleModalClose);
    } else {
      setIsVisible(false);
      setShowModal(false);
    }
  }, [isOpen, handleModalClose]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
      setShowModal(false);
    }
  };

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      className={clsx(styles['modal-overlay'], !isOpen && styles['is-hidden'])}
      onClick={handleModalClose}
      onAnimationEnd={isOpen && handleAnimationEnd}
    >
      <div
        className={clsx(
          showModal ? styles['modal-content'] : styles['modal-content-hidden'],
        )}
      >
        <button
          className={styles['modal-close-btn']}
          type="button"
          onClick={handleModalClose}
          data-close
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
