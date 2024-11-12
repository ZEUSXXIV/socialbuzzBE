const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {addMultipleImages} = require('./app/models/images.model.js')

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */



// file upload 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads';
    // Ensure the upload directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// API to upload multiple photos
app.post('/upload-multiple', upload.array('photos', 10), (req, res) => {
  // 'photos' is the field name, and '10' is the max number of files to upload
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ message: 'No photos uploaded!' });
  }

  // Generate URLs for all uploaded photos
  const photoUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);
console.log("photoUrls==>>" , JSON.stringify(photoUrls))
  // addMultipleImages(JSON.stringify(photoUrls), 1);
  var response;
  addMultipleImages(JSON.stringify(photoUrls), 1, (err, data) => {
    if (err)
    {
      console.log("err=>>" , response)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Screen."
      });
    }
    else {
      console.log("data=>>" , data)
      response = data
      res.status(200).send(data);
    }
  });

  

  //res.send({ message: 'Photos uploaded successfully!', urls: photoUrls, resp : response });
});

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/photos', (req, res) => {
  const uploadPath = 'uploads';
  
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      return res.status(500).send({ message: 'Unable to scan the directory.' });
    }

    const photoUrls = files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file}`);
    res.send(photoUrls);
  });
});




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SocialBuzz application." });
});



require("./app/routes/screen.routes.js")(app);

require("./app/routes/images.routes.js")(app);

require("./app/routes/hotel.routes.js")(app);

// require("./app/routes/tutorial.routes.js")(app);




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
