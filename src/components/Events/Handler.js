import { db } from "../Helper/firebase";

export const FetchEvents = async () => {
  const uid = sessionStorage.getItem("token");
  if (!uid) {
    console.log("User is not authenticated !");
    return;
  }
  console.log("Fetching...");
  const events = [];
  try {
    const docs = await db.collection("Users").where("uid", "==", uid).get();
    docs.forEach((doc) => {
      const data = doc.data();
      events.push(...data?.User?.events);
    });
  } catch (err) {
    console.log(err, "Something went wrong !");
  }
  console.log(events);
  return events;
};
