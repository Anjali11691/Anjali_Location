var domready = function(){
    var _u = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.870627,2.366366&radius=500&types=food&name=fast-food&key=AIzaSyA46nGujFrRxs0w9xCr0VW1_nxzdzQ6riU"
    $.get(_u, function(data){
       
       
        for(var i=0; i<data.results.length; i++){
            var _result = data.results[i];
            $('#food ul').append('<li>'+ _result.name + '</li>');
        }
    });
};

$(document).ready(domready);