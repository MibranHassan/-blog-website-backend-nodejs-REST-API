'use strict';
// Import mongoose
    const mongoose = require("mongoose");

   

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
        title: {
            type:String
            // required:true
        },
        author:{
            type:String

        //    required:true
        },
        category: {
            type:String
            // required:true
        },
        tag: {
            type:String
            // required:true
        },
        content: {
            type:String
            // required:true
        },
        image:
        {
            type:String
        }
    });

// create and export model
module.exports = mongoose.model("todoModel", TodoSchema);



