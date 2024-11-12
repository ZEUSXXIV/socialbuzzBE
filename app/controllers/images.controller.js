const { getHotelImages , setMainHotelImage, getHotelById } = require("../models/images.model.js");

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

