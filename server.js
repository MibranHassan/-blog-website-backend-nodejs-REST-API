// ya main file hoti hy isma hum import karwata hain sari files ko
'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
var cors = require('cors')


// const path = require('path');
// const fs = require("fs");
// const multer = require("multer");
// const mongoose = require("mongoose");
// var imageModel = require("./api/models/todoModel");


// create express app
const  app = express();



app.use(cors());
// const corsOptions ={
//     origin:'http://localhost:3003', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));





// define port to run express app
const  port = process.env.PORT || 3000;




// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/',
// upload.single('recfile'),
(req, res) => {
res.send("Hello World");
});



// app.set("view engine","ejs");
 
// SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
 
// var upload = multer({ storage: storage })
 
 
// app.post("/todos",upload.single('myImage'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer.from(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

  


// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});


// Import DB Connection
require("./config/db");

// Import API route
var routes = require('./api/routes/todoRoutes'); //importing route
routes(app);