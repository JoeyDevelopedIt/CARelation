$(document).ready(function() {
    console.log('PAGE LOADED!!!')
    $.ajax({
        url: "/allVins",
        method: 'GET'
    }).then(function(dataGotBack){
        console.log('these are our vin data!!!', dataGotBack);


        for(var i = 0; i < dataGotBack.length; i++) {
            var h1 = $('<h1>')
            var dateh2 = $('<h2>')

            h1.text(dataGotBack[i].vin)
            dateh2.text(dataGotBack[i].createdAt)

            var containerDiv = $('<div>').append(h1)
            containerDiv.append(dateh2)
            
            $('#vinContainer').append(containerDiv);
        }
    })

})