var express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
const db = require("./firebase").db;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Developers");
});

const addEventhandle = async (data, uid) => {
  
  try{
    const prevData = await db.collection("Users").where("uid", "==", uid).get();
         prevData.forEach( (doc) => {
           const Edata = doc.data();
           Edata.User.events.push(data);
           doc.ref
           .update(
             {User: Edata.User})
           .then((res)=> {
             console.log("Event Created");
           })
         })
        }catch(err) {
    console.log(err, "Error");
  };
};

app.post("/newevent" , (req, res) => {
  console.log(req.body)
  if(!req.body.uid){
    res.send({ message: "User is not Authenticated" });
  }
  addEventhandle(req.body.data, req.body.uid);
  res.send();
 }
)

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

const createEventHandler = async (data, uid) => {
  console.log("uid", uid);
  console.log(data);
  try {
    const oldData = await db.collection("Users").where("uid", "==", uid).get();
    oldData.forEach((doc) => {
      const ldata = doc.data();
      ldata.User.project.push(data);
      doc.ref
        .update({ User: ldata.User })
        .then((res) => {
          console.log("Project created Successfully !");
        })
        .catch((err) => {
          console.log(err, "error");
        });
    });
  } catch (err) {
    console.log(err);
  }
};

app.post("/new_user", (req, res) => {
  console.log(req.body);
  if (!req.body.uid) {
    res.send({ message: "User is not Authenticated !" });
  }
  addMemberHandler(req.body.data, req.body.uid);
  res.send({ message: "User is created Successfully !" });
});
app.post("/new_project", (req, res) => {
  if (!req.body.uid) {
    res.send({
      message: "User is not Authenticated !",
    });
  }
  createEventHandler(req.body.data, req.body.uid);
  res.send({ message: "Project created Successfully !" });
});
app.listen(5000, () => {
  console.log("Your Server is Created and Running Successfully!");
});
