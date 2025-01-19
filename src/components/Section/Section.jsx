import styles from './Section.module.css';

const Section = ({ style, children }) => {
  return <section className={styles[style]}>{children}</section>;
};

export default Section;
