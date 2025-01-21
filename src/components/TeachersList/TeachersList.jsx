import { useEffect, useState } from 'react';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import {
  fetchAllTeachers,
  fetchTeacherCount,
} from '../../firebase/teachers/services.js';

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
    if (page >= totalPage) {
      setShowLoadMore(false);
    }
  };

  useEffect(() => {
    const getTeachers = async () => {
      const teachersData = await fetchAllTeachers(page, limit);
      const teachersCountData = await fetchTeacherCount();
      setTeacherCount(teachersCountData);
      const totalPage = Math.ceil(teacherCount / limit);
      page >= totalPage ? setShowLoadMore(false) : setShowLoadMore(true);
      setTeachers(teachersData);
    };

    getTeachers();
  }, [teacherCount]);

  return (
    teachers && (
      <>
        <ul>
          {teachers?.map((teacher, idx) => {
            return (
              <li key={idx}>
                <TeacherCard teacher={teacher} />
              </li>
            );
          })}
        </ul>
        {showLoadMore && (
          <button type="button" onClick={handleLoadMore}>
            LoadMore
          </button>
        )}
      </>
    )
  );
};

export default TeachersList;
