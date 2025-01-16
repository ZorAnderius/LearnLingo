import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ label, register, required, children }) => {
  const labelId = useId();
  return (
    <label className={styles['label-container']} htmlFor={labelId}>
      <p className={styles['label-title']}>{label}</p>
      <input
        {...register(label, { required })}
        id={labelId}
        className={styles['label-input']}
      />
      {children && <div className={styles['label-children']}>{children}</div>}
    </label>
  );
};

export default Input;
