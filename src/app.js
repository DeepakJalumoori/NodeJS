const express = require("express");
const app = express();


app.get("/user",(req,res) => {
  res.send({name: "Deepak", age: 24, city: "Bangalore"});
});

app.delete("/user", (req,res) => {
  res.send("Delete Request Called");
});

app.post("/user", (req,res) => {
  res.send("Data saved to the database successfully");
});

//Request Handler function
app.use("/test",(req,res) => {
  res.send("Hello from the server side!!!");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
})