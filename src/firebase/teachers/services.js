import { get, ref } from "firebase/database"
import { database } from "../config.js"

export const fetchAllTeachers = async() => {
    const teachersRef = ref(database, 'teachers');
    const snapshot = await get(teachersRef);
    return snapshot.exists() ? snapshot.val() : {}
}