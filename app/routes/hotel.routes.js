module.exports = app => {
    const hotel = require("../controllers/hotel.controller.js");
  
    var router = require("express").Router();

    router.post("/updatedefault", hotel.setMainHotelImage);

    router.get("/:id", hotel.getHotelById);

    router.get("/rooms/:id", hotel.getAllRooms)

    router.patch("/rooms", hotel.updateRoomName)

    router.patch("/roomimage", hotel.updateRoomImage)

    router.get("/room/:roomid", hotel.getRoomDetails)
    

    app.use('/api/hotel', router);

  };
  