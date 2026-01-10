const express = require("express");

const app = express();

//Request Handler function
app.use((req,res) => {
  res.send("Hello from the server side!!!");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
})