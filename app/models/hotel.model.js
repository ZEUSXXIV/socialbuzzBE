const sql = require("./db.js");

  const getHotelById = (hotelid , callback) => {
    console.log("hotelid==>>" , hotelid)
    const query = "CALL get_hotel_details_by_id(?)";
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

  const setMainHotelImage = (hotelid, imageid , callback) => {
    console.log("hotelid==>>" , hotelid)
    const query = "CALL update_hotel_image_with_url(? , ?)";
    const params = [hotelid , imageid];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };








module.exports = { setMainHotelImage , getHotelById};
  