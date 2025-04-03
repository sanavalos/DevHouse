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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (!currentUser) return;
  
      let actualUser = {
        name: currentUser.displayName || "",
        email: currentUser.email || "",
        image: currentUser.photoURL || "",
        lastSession: currentUser.metadata?.lastSignInTime || "",
        uid: currentUser.uid,
      };
  
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        const userExists = newData.find((user) => user.uid === actualUser.uid);
        if (!userExists) {
          await setDoc(doc(db, "users", actualUser.uid), actualUser);
        }
      } catch (error) {
        console.error("Error checking or setting user:", error);
      }
    });
  
    return () => unsubscribe();
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
