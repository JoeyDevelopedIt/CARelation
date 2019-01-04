// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

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
