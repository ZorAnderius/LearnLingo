import { useEffect, useState } from 'react';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import Button from '../Button/Button.jsx';
import Container from '../Container/Container.jsx';
import {
  fetchAllTeachers,
  fetchTeacherCount,
} from '../../firebase/teachers/services.js';

import styles from './TeachersList.module.css';

const limit = 3;
let page = 1;

const TeachersList = () => {
  const [teachers, setTeachers] = useState();
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [teacherCount, setTeacherCount] = useState(0);

  const handleLoadMore = async () => {
    page += 1;
    const teachersData = await fetchAllTeachers(page, limit);
    if (teachersData) {
      setTeachers(prevState => [...prevState, ...teachersData]);
    }
    const totalPage = Math.ceil(teacherCount / limit);
    setShowLoadMore(page < totalPage);
  };

  useEffect(() => {
    page = 1;
    const getTeachers = async () => {
      const teachersData = await fetchAllTeachers(page, limit);
      setTeachers(teachersData);
    };

    const getTeachersCount = async () => {
      const teachersCountData = await fetchTeacherCount();
      setTeacherCount(teachersCountData);
      const totalPage = Math.ceil(teachersCountData / limit);
      setShowLoadMore(page < totalPage);
    };

    getTeachers();
    getTeachersCount();
  }, []);

  return (
    teachers && (
      <section>
        <Container>
          <div className={styles['teacher-block-container']}>
            <ul className={styles['teachers-list']}>
              {teachers?.map((teacher, idx) => {
                return (
                  <li key={idx} className={styles['teacher-item']}>
                    <TeacherCard teacher={teacher} />
                  </li>
                );
              })}
            </ul>
            {showLoadMore && (
              <Button type="button" style="loadMore" onClick={handleLoadMore}>
                Load more
              </Button>
            )}
          </div>
        </Container>
      </section>
    )
  );
};

export default TeachersList;
