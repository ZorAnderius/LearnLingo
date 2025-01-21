import {
  get,
  limitToFirst,
  limitToLast,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { database } from '../config.js';

export const fetchAllTeachers = async (page = 1, limit = 3) => {
  console.log(page);
  const offset = (page - 1) * limit;
  console.log(offset);
  const teachersRef = ref(database, 'teachers');
  const teachersQuery = query(
    teachersRef,
    orderByKey(),
    startAt(String(offset)),
    limitToFirst(limit),
  );
  const snapshot = await get(teachersQuery);
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.values(data).filter(Boolean);
  }
  return [];
};

export const fetchTeacherCount = async () => {
  const teachersRef = ref(database, 'teachers');
  const teachersQuery = query(teachersRef, orderByKey(), limitToLast(1));
  const snapshot = await get(teachersQuery);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const lastKey = Object.keys(data)[0];
    return parseInt(lastKey, 10);
  }
  return 0;
};
