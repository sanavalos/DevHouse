import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

export function getUsers() {
  return async function (dispatch) {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      dispatch({ type: "GET_USERS", payload: newData });
    });
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    const docRef = doc(db, "users", id);
    try {
      const docSnap = await getDoc(docRef);
      dispatch({ type: "GET_USER", payload: docSnap.data() });
    } catch (error) {
      console.log(error);
    }
  };
}
