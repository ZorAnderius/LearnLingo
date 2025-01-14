import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config.js";

export const signUp = async (email, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        return userCredentials.user;
    } catch (error) {
        console.log(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials.user;
    } catch (error) {
        console.log(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
        console.log('user logged out');
    } catch (error) {
        console.log(error);
    }
}

export const getCurrentUser = () => {
    const user = auth.currentUser;
    return user ? {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
    } : null;
}