import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCPmtDLUp8A1ASP8be2msFDn6p3APMHN4c",
  authDomain: "fruitflix-ad124.firebaseapp.com",
  projectId: "fruitflix-ad124",
  storageBucket: "fruitflix-ad124.appspot.com",
  messagingSenderId: "338376840150",
  appId: "1:338376840150:web:8f7931160224cc14ae4a77"
};

const app = initializeApp(firebaseConfig, "admin");
export const storage = getStorage(app) 