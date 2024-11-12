module.exports = app => {
    const images = require("../controllers/images.controller.js");
  
    var router = require("express").Router();

    router.get("/:hotelid", images.getHotelImages);

    router.post("/updatedefault", images.setMainHotelImage);

    app.use('/api/images', router);

  };
  