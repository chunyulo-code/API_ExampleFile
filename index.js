const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const importData = require("./data.json")
const devicesRoute = require("./routes/deviceRoute")
let port = process.env.PORT || 3000;


// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
    })
  );
app.use("/devices", devicesRoute);


app.get("/", (req, res) => {
  res.send("This is Homepage");
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});