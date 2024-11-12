const sql = require("./db.js");

  const setRoomDetails = (roomid, name, imageid, days, isActive , callback) => {
    console.log("hotelid==>>" , hotelid)
    const query = "CALL update_room_details(? , ?, ? , ? , ?)";
    const params = [roomid , name, imageid, days, isActive];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };

  const getAllRooms = (hotelid , callback) => {
    console.log("hotelid==>>" , hotelid)
    const query = "CALL get_rooms_by_hotelid_with_image_url(?)";
    const params = [hotelid];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };


  const updateRoomName = (roomid, name , callback) => {
    console.log("hotelid==>>" , roomid)
    const query = "CALL update_room_name(? , ?)";
    const params = [roomid , name];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };

  const updateRoomImage = (roomid, imageid , callback) => {
    const query = "CALL set_room_imageid_and_return_details(? , ?)";
    const params = [roomid , imageid];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };







module.exports = {getAllRooms , setRoomDetails , updateRoomName, updateRoomImage };
  
