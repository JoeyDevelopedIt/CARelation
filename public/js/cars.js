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
})