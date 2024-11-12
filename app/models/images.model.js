const sql = require("./db.js");



const addMultipleImages = (urls, hotelid, callback) => {
    const query = "CALL add_multiple_images_url(?, ?)";
    const params = [urls, hotelid];
  
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      }
  
      // Assuming the stored procedure returns the inserted ID or affected rows
      console.log("Entry added: ", res);
      callback(null, res);
    });
  };

  const getHotelImages = (hotelid , callback) => {
    console.log("hotelid==>>" , hotelid)
    const query = "CALL get_images_by_hotel(?)";
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








module.exports = {addMultipleImages , getHotelImages , setMainHotelImage , getHotelById};
  