
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
apiKey: "AIzaSyC7_rRFkLNAByUO9wxgud6s3ovwypQBrIQ",
authDomain: "appbooksfromreact.firebaseapp.com",
projectId: "appbooksfromreact",
storageBucket: "appbooksfromreact.appspot.com",
messagingSenderId: "299615666491",
appId: "1:299615666491:web:9d6b6a2ff0258d867fb71e",
measurementId: "G-1T4LZQ6J6K"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)

