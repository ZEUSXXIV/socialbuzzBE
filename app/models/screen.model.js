const sql = require("./db.js");



const addEntry = (room, name, image, callback) => {
    const query = "CALL AddEntry(?, ?, ?)";
    const params = [room, name, image];
  
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      }
  
      // Assuming the stored procedure returns the inserted ID or affected rows
      console.log("Entry added: ", { id: res.insertId, room, name, image });
      callback(null, { id: res.insertId, room, name, image });
    });
  };


  const getAllScreens = (callback) => {
    const query = "CALL GetAllScreens";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };


  const getScreenByRoom = (room , callback) => {
    console.log("room==>>" , room)
    const query = "CALL GetDataByRoom(?)";
    const params = [room];
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      } 
  
      callback(null, res);
    });
  };

  const updateScreenByRoom = (room, name, image, callback) => {
    const query = "CALL UpdateEntry(?, ?, ?)";
    const params = [room, name, image];
  
    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      }
  
      // Assuming the stored procedure returns the inserted ID or affected rows
      console.log("Entry added: ", { id: res.insertId, room, name, image });
      callback(null, { id: res.insertId, room, name, image });
    });
  };


module.exports = {addEntry , getAllScreens , getScreenByRoom , updateScreenByRoom};
  