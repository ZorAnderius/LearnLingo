import styles from './TeacherCard.module.css';

const TeacherCard = ({ teacher }) => {
    // console.log(teacher);
  return <div className={styles}>{teacher.languages}</div>;
};

export default TeacherCard;
