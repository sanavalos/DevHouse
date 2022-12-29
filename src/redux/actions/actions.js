import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
export const GET_USERS = "GET_USERS";

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

getUsers();
