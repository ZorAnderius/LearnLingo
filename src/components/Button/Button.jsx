import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ type, style, children, active, handleClick }) => {
  const handleClickBtn = () => {
    handleClick && handleClick();
  };

  return (
    <button
      type={type}
      className={clsx(styles[style], active && styles['active-btn'])}
      onClick={handleClickBtn}
    >
      {children}
    </button>
  );
};

export default Button;
