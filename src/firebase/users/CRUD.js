import { child, get, ref, set, update } from 'firebase/database';
import { database } from '../config.js';

export const setUser = async (user, additionalData) => {
  try {
    await set(ref(database, `users/${user.uid}`), {
      email: user.email,
      ...additionalData,
    });
  } catch (error) {
    console.log(error);
  } 
};

export const getUser = async id => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users/${id}`));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserTheme = async (id, newTheme) => {
  try {
    const userRef = ref(database, `users/${id}`);
    await update(userRef, { theme: newTheme });
  } catch (error) {
    console.log(error);
  }
};
