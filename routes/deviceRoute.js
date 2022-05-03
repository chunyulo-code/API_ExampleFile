const router = require("express").Router();
const importData = require("../data.json");
const { v4: uuidv4 } = require("uuid");


//Get Routes
router.get("/", (req, res) => {
    res.send(importData);
  });
router.get("/:deviceNumber", (req, res) => {
    let deviceNumber = req.params.deviceNumber;
    let numdN = parseInt(deviceNumber);
    for (let i = 0; i < importData.length; i++) {
        if (importData[i].id == numdN) res.send(importData[i]);
    }
});

//Post Routes
router.post("/", (req, res) => {
    // res.header("Access-Controlac-Allow-Origin", "*");
    const iot = req.body;
    const deviceWithId = { ...iot, deviceId: uuidv4() };
    res.send(
        `Device with the name of ${iot.name} added to the database!!! ${deviceWithId.name}`
    );
    console.log(iot);
    importData.push(deviceWithId);
});

//Patch Route
router.patch("/:deviceNumber", (req, res) => {
    let adjust = req.body;
    let deviceNumber = req.params.deviceNumber;
    let numdN = parseInt(deviceNumber);
    let deviceIndex = importData.findIndex((device) => device.id == deviceNumber);
    importData[deviceIndex].Humidity = adjust.Humidity;
    importData[deviceIndex].Temperature = adjust.Temperature;
    importData[deviceIndex].Weather = adjust.Weather;
    res.status(200).send("Updated product!!!");
});

//Delete Route
router.delete("/:deviceNumber", (req, res) => {
    let deviceNumber = req.params.deviceNumber;
    let numdN = parseInt(deviceNumber);
    let deviceIndex = importData.findIndex((device) => device.id == deviceNumber);
    importData.splice(deviceIndex, 1);
  
    res.status(200).json({
      message: "Deleted product!"
    });
  });
  
module.exports = router;