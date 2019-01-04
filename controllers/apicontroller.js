var axios = require("axios");

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