import Filters from '../../components/Filters/Filters.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import styles from './TeachersPage.module.css';

// asAs12$fd;

const TeachersPage = () => {
  return (
    <main className={styles['teacher-main']}>
      <Filters />
      <TeachersList />
    </main>
  );
};

export default TeachersPage;
