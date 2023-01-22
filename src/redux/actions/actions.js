import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../../firebase";
export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const GET_POSTS = "GET_POSTS";
export const FILTER_POSTS = "FILTER_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const GET_RESPONSES = "GET_RESPONSES";
export const LAST_POST = "LAST_POST";
export const MOST_COMMENTED = "MOST_COMMENTED";
export const USERS_COUNTRY = "USERS_COUNTRY";
export const GET_CHAT_MESSAGES = "GET_CHAT_MESSAGES";

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

export function clearUser() {
  return function (dispatch) {
    dispatch({ type: "CLEAR_USER" });
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

export function getResponses(post) {
  return async function (dispatch) {
    await getDocs(collection(db, "responses")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      dispatch({ type: "GET_RESPONSES", payload: { newData, post } });
    });
  };
}

export function mostCommented() {
  return function (dispatch) {
    dispatch({ type: "MOST_COMMENTED" });
  };
}

export function orderByLastPost() {
  return function (dispatch) {
    dispatch({ type: "LAST_POST" });
  };
}

export function usersCountry(country, userId) {
  return async function (dispatch) {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      dispatch({
        type: "USERS_COUNTRY",
        payload: { country, userId, newData },
      });
    });
  };
}

export function getChatMessages() {
  return function (dispatch) {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      dispatch({
        type: "GET_CHAT_MESSAGES",
        payload: messages,
      });
    });
  };
}
