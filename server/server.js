var express = require("express");

var app = express();

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

app.listen(5000, () => {
  console.log("Your Server is Created and Running Successfully!");
});

