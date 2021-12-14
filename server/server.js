var express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
const db = require("./firebase").db;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Developers");
});

const addeventhandle = (eventdata) => {
  console.log(eventdata)
  db.collection("Events")
    .set(eventdata)
    .then( (response) => {
      console.log("Event Added Successfully")
    })
}

app.post("/newevent" , (req, res) => {
  console.log(req.body)
  addeventhandle(req.body)
  res.send()
 }     
)

const addMemberHandler = (data) => {
  console.log(data);
  db.collection("Users")
    .doc(data?.name)
    .set(data)
    .then((res) => {
      console.log("Member added Successfully !");
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
app.post("/new_user", (req, res) => {
  console.log(req.body);
  addMemberHandler(req.body);
  res.send();
});
app.listen(5000, () => {
  console.log("Your Server is Created and Running Successfully!");
});

