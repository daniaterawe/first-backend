const express = require("express");
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

let arr = [
  { id: 1, username: "khattab", age: 20 },
  { id: 2, username: "rami", age: 20 },
  { id: 3, username: "batool", age: 20 }
];

// GET all users
app.get("/users", (req, res) => {
  res.send(arr);
});

// POST a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  arr.push(newUser);
  res.send("User created");
});

// PUT update a user
app.put("/users", (req, res) => {
  const id = req.body.id;
  let userFound = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr[i] = req.body;
      userFound = true;
      break;
    }
  }

  if (userFound) {
    res.send("User updated");
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
app.delete("/users/id",(req,res)=>{
  for(let i=0;i<arr.length;i++){
const newArr=arr.filter((item)=>item.id!==id)
res.send(newArr)
  }})
