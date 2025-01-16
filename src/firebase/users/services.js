import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../config.js';
import { getUser, setUser } from './CRUD.js';

export const signUp = async (email, password, additionalData = {}) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredentials.user;

    await setUser(user);

    return {
      ...user,
      displayName: additionalData?.name ? additionalData?.name : null,
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredentials.user;
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('user logged out');
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  const additionData = await getUser(user.uid);
  return {
    uid: user.uid,
    email: user.email,
    displayName: additionData?.name ? additionData?.name : null,
    theme: additionData?.theme ? additionData?.theme : 'basic',
  };
};

export const isAuth = async callback => {
  onAuthStateChanged(auth, user => {
    user ? callback(user) : callback(null);
  });
};
