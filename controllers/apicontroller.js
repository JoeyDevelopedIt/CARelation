// Here we incorporate the "axios" npm package
var axios = require("axios");

module.exports = function(app) {
  
  app.get("/api/data/year", function(req,res){
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&rows=50").then(
      function(response) {
        res.send(response.data)
      }
    );
  });

  
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
