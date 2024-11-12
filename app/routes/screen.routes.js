module.exports = app => {
    const screen = require("../controllers/screen.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", screen.create);

    router.get("/", screen.getAllScreens);

    router.get("/:room", screen.GetScreenByRoom);

    router.put("/", screen.update);
  
    app.use('/api/screens', router);
  };
  