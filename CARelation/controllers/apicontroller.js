// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

// We then run the request with axios module on a URL with a JSON
axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&make=ford").then(
  function(response) {
    // Then we print out the imdbRating
    // var data = JSON.stringify(response);
    console.log(response.data);
    

    // console.log("The movie's rating is: " + data);
  }
);
