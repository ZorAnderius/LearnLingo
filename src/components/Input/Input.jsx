import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ label, register, required, children, type = 'text' }) => {
  const labelId = useId();
  return (
    <label className={styles['label-container']} htmlFor={labelId}>
      <input
        type={type}
        {...register(label, { required })}
        id={labelId}
        className={styles['label-input']}
        placeholder={label}
      />
      {children && <div className={styles['label-children']}>{children}</div>}
    </label>
  );
};

export default Input;
