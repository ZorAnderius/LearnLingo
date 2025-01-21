import styles from './Container.module.css';

const Container = ({ children, location = '' }) => {
  return (
    <div className={location ? styles[location] : styles['container']}>
      {children}
    </div>
  );
};

export default Container;
