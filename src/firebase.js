import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdZzSL_c3ieonAOCao5BjjiMBE_gwEZXU",
  authDomain: "henryhouse-96576.firebaseapp.com",
  projectId: "henryhouse-96576",
  storageBucket: "henryhouse-96576.appspot.com",
  messagingSenderId: "316972567845",
  appId: "1:316972567845:web:e47c5e44da46ffeb045ecc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
export default app
