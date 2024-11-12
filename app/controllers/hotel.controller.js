const { getHotelImages , setMainHotelImage, getHotelById } = require("../models/hotel.model.js");
const { getAllRooms , updateRoomName , updateRoomImage} = require("../models/room.model.js")

exports.getHotelImages = (req , res) => {
  const hotelid = req.params.hotelid
  getHotelImages(hotelid , (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Screen."
      });
    else res.status(200).send(data);
  });
};

exports.getHotelById = (req , res) => {
  const hotelid = req.params.id
  getHotelById(hotelid , (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Screen."
      });
    else res.status(200).send(data);
  });
};

exports.getAllRooms = (req , res) => {
    const hotelid = req.params.id
    getAllRooms(hotelid , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Screen."
        });
      else res.status(200).send(data);
    });
  };

exports.setMainHotelImage = (req , res) => {
  const hotelid = req.body.hotelid
  const imageid = req.body.imageid
  setMainHotelImage(hotelid, imageid , (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Screen."
      });
    else res.status(200).send(data);
  });
};


exports.updateRoomDetails = (req , res) => {
    const hotelid = req.params.id
    getAllRooms(hotelid , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Screen."
        });
      else res.status(200).send(data);
    });
  };

  exports.updateRoomName = (req , res) => {
    const roomid = req.body.roomid
    const name = req.body.name
    
    updateRoomName(roomid , name , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Screen."
        });
      else res.status(200).send(data);
    });
  };

  exports.updateRoomImage = (req , res) => {
    const roomid = req.body.roomid
    const imageid = req.body.imageid
    
    updateRoomImage(roomid , imageid , (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Screen."
        });
      else res.status(200).send(data);
    });
  };


