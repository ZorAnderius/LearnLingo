import styles from './Select.module.css';

const Select = ({ options }) => {
  return (
    <select className={styles}>
      {options &&
        options?.map((data, idx) => {
          return <option key={idx} value={data}>{data}</option>;
        })}
    </select>
  );
};

export default Select;
