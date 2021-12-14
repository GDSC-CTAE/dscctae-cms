// import firebase from 'firebase'

// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const db=firebase.firestore();
// const  signIn = async (email, password) => {
//     try {
//       const res =  await auth.signInWithEmailAndPassword(email, password);
//       const user = res.user;
//       console.log("user")
//       const query = await db
//       .collection("users")
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         // name: user.displayName,
//         // authProvider: "google",
//         email: user.email,
//       });
//      }
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

// export {
//     signIn
// }