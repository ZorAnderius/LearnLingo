import { useEffect } from 'react';
import styles from './TeachersPage.module.css';
import { getCurrentUser } from '../../firebase/users/services.js';

// asAs12$fd;

const TeachersPage = () => {
  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      console.log(user);
    };

    getUser();
  }, []);
  return <div className={styles}>Teachers Page</div>;
};

export default TeachersPage;
