import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      let actualUser = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        image: currentUser?.photoURL,
        lastSession: currentUser?.metadata.lastSignInTime,
        uid: currentUser?.uid,
      };
      getDocs(collection(db, "users")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        const userExists = newData.find((user) => user.uid === actualUser.uid);
        if (!userExists) {
          setDoc(doc(db, "users", actualUser.uid), actualUser);
        }
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, googleSignIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

export default AuthContextProvider;
