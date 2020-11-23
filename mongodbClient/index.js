"use strict";

const { MongoClient } = require("mongodb");
//mongo library

require("dotenv").config();
const { MONGO_URI } = process.env;

module.exports = ()=>{
    const client =  MongoClient(MONGO_URI);  
    return client;
}

