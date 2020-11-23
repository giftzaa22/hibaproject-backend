const helloWord = require("./helloWord")
const addToLibrary = require("./addToLibrary")
const getLibrary = require("./getLibrary")
const removeFromLibrary = require("./removeFromLibrary")
module.exports = (app) =>{
    // app is our server 
    // app.<method>(<page>, <handler>)
    // method:get,post,delete 
    // page:to go to a specific page
    // handler:javascript function that handle request 
    app.get("/",helloWord);
    app.post("/library",addToLibrary);
    app.get("/library/:email",getLibrary);
    app.delete("/library",removeFromLibrary)
}