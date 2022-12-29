// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
export const GET_GEOLOCATION = "GET_NAME";

export function getGeolocation(lat, lng) {
  return function (dispatch) {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=es`
    ).then((response) => {
      response.json().then((data) => {
        dispatch({ type: "GET_GEOLOCATION", payload: [data] });
      });
    });
  };
}

// export async function getUsers() {
//   await getDocs(collection(db, "users")).then((querySnapshot) => {
//     const newData = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//     }));
//     setData(newData);
//   });
// }
