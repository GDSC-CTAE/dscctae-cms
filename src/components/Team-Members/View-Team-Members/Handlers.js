import { db } from "../../Helper/firebase";

export const FetchMembers = async () => {
  const uid = sessionStorage.getItem("token");
  if (!uid) {
    console.log("User is not authenticated !");
    return;
  }
  console.log("Fetching...");
  const member = [];
  try {
    const docs = await db.collection("Users").where("uid", "==", uid).get();
    docs.forEach((doc) => {
      const data = doc.data();
      member.push(...data?.User?.teamMember);
    });
  } catch (err) {
    console.log(err, "Something went wrong !");
  }
  console.log(member);
  return member;
};
