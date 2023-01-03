import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_POSTS = "GET_POSTS";
export const FILTER_POSTS = "FILTER_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const CLEAR_FILTER = "CLEAR_FILTER";

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

export function getPosts() {
  return async function (dispatch) {
    await getDocs(collection(db, "posts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      dispatch({ type: "GET_POSTS", payload: newData });
    });
  };
}

export function filterPosts(country) {
  return function (dispatch) {
    dispatch({ type: "FILTER_POSTS", payload: country });
  };
}

export function searchPosts(input) {
  return function (dispatch) {
    dispatch({ type: "SEARCH_POSTS", payload: input });
  };
}

export function clearFilter() {
  return function (dispatch) {
    dispatch({ type: "CLEAR_FILTER" });
  };
}
