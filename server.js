// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"))
// Routes
require("./controllers/html-routes")(app);
require("./controllers/apicontroller")(app);




//move this into your controller file
var axios = require("axios");
app.get("/api/data", function(req,res){
  axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used").then(
    function(response) {
      // Then we print out the imdbRating
      // console.log("The movie's rating is: " + JSON.stringify.response);
      res.send(response.data)
    }
  );
})
// We then run the request with axios module on a URL with a JSON


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
