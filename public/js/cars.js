$("#year").on("change", function() {
    var year = $(this).val();
    console.log(year)
    //make an api call with the year
    $.post('/api/data/make', {year: year})
    .then(function(res){
        console.log(res.listings)
    })
 });

$("#vinSearch").on("click", function() {
    console.log("click hello")

    var vin = {vin: $('#vinInput').val()}

    $.ajax({
        url : '/vinTest',
        type : 'POST',
        data: vin,
        dataType: 'json'
    }).then(function(dataGotBack) {
        console.log('data!!!!!', dataGotBack);
        console.log('total_cars_sold_in_last_45_days', dataGotBack.total_cars_sold_in_last_45_days);

        var h1 = $('<h1>')
        h1.text('Total Sold last 45 days ' + dataGotBack.total_cars_sold_in_last_45_days)
        $('#infoDiv').append(h1)

        var secondh1 = $('<h1>')
        secondh1.text('Total Actice Cars RN ' + dataGotBack.total_active_cars_for_ymmt)
        $('#infoDiv').append(secondh1)
    });
})
 
 
 $(document).ready(function() {
     
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
 });
 
