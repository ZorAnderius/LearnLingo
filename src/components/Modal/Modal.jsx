import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timerId = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      return () => clearTimeout(timerId);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={handleOverlayClick}>
      <div
        className={clsx(
          styles['modal-content'],
          isOpen ? styles['modal-open'] : styles['modal-close'],
        )}
      >
        <button
          className={styles['modal-close-btn']}
          type="button"
          onClick={onClose}
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
