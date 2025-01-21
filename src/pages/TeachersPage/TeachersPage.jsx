import Filters from '../../components/Filters/Filters.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import styles from './TeachersPage.module.css';

// asAs12$fd;

const TeachersPage = () => {
  return (
    <div className={styles}>
      <Filters />
      <TeachersList />
    </div>
  );
};

export default TeachersPage;
