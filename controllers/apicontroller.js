var axios = require("axios");

<<<<<<< HEAD
module.exports = function(app) {
  var axios = require("axios");
  var path = require('path')
  app.get('/api/cardata', function(req,res){
    axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used").then(
    function(response) {
      console.log(response.data);
      res.json(response.data)
    });
  })

  app.get('/home', function(req,res) {
    console.log('we hit the home route!!')
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

}
=======
// We then run the request with axios module on a URL with a JSON
function fetchCarMakes(year){
  //modify this api call to take a year and return a last of makes
  axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&make=ford").then(
    function(response) {
      // Then we print out the imdbRating
      // var data = JSON.stringify(response);
      console.log(response.data);
      
  
      // console.log("The movie's rating is: " + data);
    }
  );
}

module.exports = function(app) {
  app.post('/api/make', function(req,res){
    var year = req.body.year;
    fetchCarMakes(year)
    //fetchCarMakes returns list a makes
    //res should send like of car makes to the frontend (res.json())    
    res.send("hi")
  })
}
>>>>>>> 4a0a3fa4b7d6358f90d293eae1149fdc793d03e9
