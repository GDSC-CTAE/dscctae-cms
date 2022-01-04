import { db } from "../../Helper/firebase";

export const FetchProjects = async () => {
  const uid = sessionStorage.getItem("token");
  if (!uid) {
    console.log("User is not authenticated !");
    return;
  }
  console.log("Fetching...");
  const member = [];
  try {
    const docRef = await db.collection("Users").where("uid", "==", uid).get();
    docRef.forEach((doc) => {
      const ldata = doc.data();
      console.log(ldata.User.project);
      member.push(...ldata.User.project);
    });
  } catch (Err) {
    console.log(Err, "Error");
  }
  return member;
};
