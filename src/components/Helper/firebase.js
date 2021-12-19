import firebase from "firebase";
import "firebase/auth";
import {User} from './../../userModel'
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


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const database = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;

export const  SignIn = async (email, password , role) => {
    User.email = email;
    User.password = password;
    User.role = role;
    console.log(User);
    try {
      const res =  await auth.signInWithEmailAndPassword(email, password);
      const user = res.user;
      console.log(user.uid);
      sessionStorage.setItem('token', user.uid)
      const query = await db
      .collection("Users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
       User
      });
     }
    } catch (err) {
      console.error(err);
    }
  };
