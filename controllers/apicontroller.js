// Here we incorporate the "axios" npm package
var axios = require("axios");
var db = require('../models');


module.exports = function(app) {


  app.post('/vinTest', function(req,res) {
    
    
    console.log('this is my req.body!!', req.body.vin)

    db.Vin.create({vin: req.body.vin}).then(function(whatWeGotBack){
      console.log('what we got back!!!', whatWeGotBack);
    })    

    axios.get("https://marketcheck-prod.apigee.net/v1/mds?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&vin=" + req.body.vin +"&latitude=37.998&longitude=-84.522&radius=1000&include_sold=true&exact=true&debug=1").then(function(stuffFromAPI) {
        console.log('stuffFromAPI', stuffFromAPI.data)
        res.json(stuffFromAPI.data)
      }
    );
  })
  
  app.get("/api/data/update-vehicle-data" , function(req, res) {
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&rows=50").then(
      function(response) {
        res.send(response.data)
      }
    );
  });

  app.get("/api/data/year", function(req,res){
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&rows=50").then(
      function(response) {
        res.send(response.data)
      }
    );
  });

  app.get('/allVins', function(req,res){
    db.Vin.findAll({}).then(function(whatWeGotBack){
      console.log('what we got back!!!', whatWeGotBack);
      res.json(whatWeGotBack);
    });   
  })

  
  app.post('/api/data/make', function(req,res){
    var year = req.body.year;
    console.log(year)
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&year=" + year).then(
      function(response) {
        res.send(response.data)
      }
  )
})
}
