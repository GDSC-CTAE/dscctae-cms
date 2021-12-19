import { db } from "../../Helper/firebase";

export const FetchMembers = async () => {
  const member = [];
  try {
    const docs = await db.collection("Users").get();
    docs.forEach((doc) => {
      member.push(doc.data());
    });
  } catch (err) {
    console.log(err, "Something went wrong !");
  }
  return member;
};
