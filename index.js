const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const importData = require("./data.json")
let port = process.env.PORT || 3000;


// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("This is Homepage");
});

app.get("/devices", (req, res)=>{
    res.send(importData)
})

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});