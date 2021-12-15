// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1K1PQLWSwOPx-An9bN67TZAZuEtR-ZLQ",
  authDomain: "cmsportal-2738f.firebaseapp.com",
  databaseURL: "https://cmsportal-2738f-default-rtdb.firebaseio.com",
  projectId: "cmsportal-2738f",
  storageBucket: "cmsportal-2738f.appspot.com",
  messagingSenderId: "545238129971",
  appId: "1:545238129971:web:12a18f1c524c5070973246",
  measurementId: "G-5E1TYNMED5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;

const  signIn = async (email, password) => {
    try {
      const res =  await auth.signInWithEmailAndPassword(email, password);
      const user = res.user;
      console.log(user.uid)
      const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        // name: "Super Admin",
        email: user.email,
      });
     }
    } catch (err) {
      console.error(err);
    }
  };
export{
  signIn
}
