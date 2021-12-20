var express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
const db = require("./firebase").db;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Developers");
});

// const addeventhandle = (eventdata) => {
//   console.log(eventdata)
//   db.collection("Events")
//     .doc(eventdata?.nameofevent)
//     .set(eventdata)
//     .then( (response) => {
//       console.log("Event Added Successfully")
//     })
// }

// app.post("/newevent" , (req, res) => {
//   console.log(req.body)
//   addeventhandle(req.body)
//   res.send()
//  }
// )

const addMemberHandler = async (data, uid) => {
  console.log("uid in backend" + uid);
  try {
    const OldData = await db.collection("Users").where("uid", "==", uid).get();
    OldData.forEach((doc) => {
      const ldata = doc.data();
      ldata.User.teamMember.push(data);
      doc.ref
        .update({ User: ldata.User })
        .then((res) => {
          console.log("Member Added Successfully !");
        })
        .catch((err) => {
          console.log(err, "Error");
        });
    });
  } catch (err) {
    console.log(err, "error");
  }
};

app.post("/new_user", (req, res) => {
  console.log(req.body);
  if (!req.body.uid) {
    res.send({ message: "User is not Authenticated !" });
  }
  addMemberHandler(req.body.data, req.body.uid);
  res.send();
});
app.listen(5000, () => {
  console.log("Your Server is Created and Running Successfully!");
});
