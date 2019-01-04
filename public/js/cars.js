$("#year").on("change", function() {
   var year = $(this).val();
   console.log(year)
   //make an api call with the year
   $.post('/api/make', {year: year})
   .then(function(res){
       console.log(res)
       //should get a list of car makes
       //use jquery to update the next select options html with the list of car makes
       //repeat the whole process for each different option with different routes/api calls
   })

});

$( document ).ready(function() {
    $.get('/api/data')
    .then(function(res){
        console.log(res);
        for (var i=0; i<res.listings.length; i++){
            console.log(res.listings[i].build.year);
            //dynamically appending year of each car 
            var years = document.createElement('option');
            years.value = res.listings[i].build.year;
            years.text = res.listings[i].build.year;
            document.getElementById('year').appendChild(years);
           // dynamically appening make of each car
            var makedynamic = document.createElement('option');
            makedynamic.value = res.listings[i].build.make;
            makedynamic.text = res.listings[i].build.make;
            document.getElementById('make').appendChild(makedynamic);    
             // dynamically appening model of each car
            var modeldynamic = document.createElement('option');
            modeldynamic.value = res.listings[i].build.model;
            modeldynamic.text = res.listings[i].build.model;
            document.getElementById('model').appendChild(modeldynamic);    
             // dynamically appening trim of each car
            var trimdynamic = document.createElement('option');
            trimdynamic.value = res.listings[i].build.trim;
            trimdynamic.text = res.listings[i].build.trim;
            document.getElementById('trim').appendChild(trimdynamic);                 
             
            
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
