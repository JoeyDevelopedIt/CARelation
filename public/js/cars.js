$("#year").on("change", function() {
   var year = $(this).val();
   console.log(year)
   //make an api call with the year
   $.post('/api/data/make', {year: year})
   .then(function(res){
       console.log(res.listings)
   })
});

// $("#make").on("change", function() {
//     var make = $(this).val();
//     console.log(make)
//     //make an api call with the make
//     $.post('/api/data/make', {make: make})
//     .then(function(res){
//         console.log(res.make)
//     })
//  });
 
//  $("#model").on("change", function() {
//     var model = $(this).val();
//     console.log(model)
//     //make an api call with the model
//     $.post('/api/data/model', {model: model})
//     .then(function(res){
//         console.log(res.model)
//     })
//  });

//  $("#trim").on("change", function() {
//     var trim = $(this).val();
//     console.log(model)
//     //make an api call with the model
//     $.post('/api/data/trim', {trim: trim})
//     .then(function(res){
//         console.log(res.model)
//     })
//  });

$( document ).ready(function() {
    
    function getUsedCarData (event) {
        console.log('I am a new event ===>', event)
        // axios.get("https://marketcheck-prod.apigee.net/v1/search?api_key=09oZb9G6v9CAkVxHvH2bApAWgXWACx4h&car_type=used&rows=50").then(
        //     function(response) {
        //       res.send(response.data)
        //     }
        // );
    }

    $(".year").change(function () {
        console.log('event from the dropdown ==>', $(this).text)
    })

    $.get('/api/data/year')
    .then(function(res){
        var yearsData = []  
        for (var i=0; i<res.listings.length; i++){
            var year = res.listings[i].build.year;
            if (yearsData.indexOf(year) < 0) {
                yearsData.push(year);
            }     
        }
        yearsData = yearsData.sort()
        console.log( 'year DATA ==>', yearsData)
        for(var i = 0; i< yearsData.length; i++){
            var years = document.createElement('option');
            years.value = yearsData[i];
            years.text = yearsData[i];
            document.getElementById('year').appendChild(years);
        }
});



// $("#searchbtn").on("click", function() {
//     // var year = $(this).val();
//     // console.log(year)
//     //make an api call with the year
//     $.get('/api/data')
//     .then(function(res){
//         for (var i=0; i<res.listings.length; i++){
//             console.log(res.listings[i].build.year);
//             var years = document.createElement('option');
//             years.value = res.listings[i].build.year;
//             years.text = res.listings[i].build.year;
//             document.getElementById('year').appendChild(years);
        

        
    
//         }


        // console.log(res)
        // console.log(res.listings[0].build.year)
        //should get a list of car makes
        //use jquery to update the next select options html with the list of car makes
        //repeat the whole process for each different option with different routes/api calls
    // })
 });



        //     //dynamically appending year of each car 
    
        //    // dynamically appening make of each car
        //     var makedynamic = document.createElement('option');
        //     makedynamic.value = res.listings[i].build.make;
        //     makedynamic.text = res.listings[i].build.make;
        //     document.getElementById('make').appendChild(makedynamic);    
        //      // dynamically appening model of each car
        //     var modeldynamic = document.createElement('option');
        //     modeldynamic.value = res.listings[i].build.model;
        //     modeldynamic.text = res.listings[i].build.model;
        //     document.getElementById('model').appendChild(modeldynamic);    
        //      // dynamically appening trim of each car
        //     var trimdynamic = document.createElement('option');
        //     trimdynamic.value = res.listings[i].build.trim;
        //     trimdynamic.text = res.listings[i].build.trim;
        //     document.getElementById('trim').appendChild(trimdynamic);  