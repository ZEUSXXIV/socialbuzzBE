const {addEntry , getAllScreens , getScreenByRoom, updateScreenByRoom} = require("../models/screen.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const room = req.body.room;
  const name = req.body.name;
  const image = req.body.image;

  addEntry(room ,name , image , (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Screen."
      });
    else res.send(data);
  });
};

exports.getAllScreens = (req , res) => {

  getAllScreens((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Screen."
      });
    else res.status(200).send(data);
  });
};


exports.GetScreenByRoom = (req , res) => {
    const room = req.params.room
    getScreenByRoom(room ,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Screen."
        });
      else res.status(200).send(data);
    });
  };


  exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const room = req.body.room;
    const name = req.body.name;
    const image = req.body.image;
  
    updateScreenByRoom(room ,name , image , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Screen."
        });
      else res.send(data);
    });
  };