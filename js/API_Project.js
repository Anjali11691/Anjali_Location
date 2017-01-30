var style = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2c88ae"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

$("#swiper").click(function(){
    //keyword=this.attr("id");
    console.log("yoyoyo");
});
    
function getshops(lat, lng, keyword) {
    var _u = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=1000&keyword="+keyword+"&key=AIzaSyA46nGujFrRxs0w9xCr0VW1_nxzdzQ6riU";
    $.get(_u, function (data) {
        for (var i=0; i<data.results.length; i++){
            var _result = data.results[i];
            var infowindow = new google.maps.InfoWindow;
            var marker = new google.maps.Marker({
                position : {
                    lat : _result.geometry.location.lat,
                    lng : _result.geometry.location.lng
                },
                map : map,
                icon : 'images/pin_medium.png'
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    var img = '';
                    
                    if (data.results[i].opening_hours.open_now==true){
                        var ouverture = '<font color="green">Ouvert</font>';
                    }
                    else {
                        var ouverture = '<font color="red">Fermé</font>';
                    }
                    if(data.results[i].photos){
                        img = '<img width="100%" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+data.results[i].photos[0].photo_reference+'&key=AIzaSyA46nGujFrRxs0w9xCr0VW1_nxzdzQ6riU">';
                    }
                    infowindow.setContent(
                    '<div id="infoWinStyle">'+
                    '<div id="topWin">'+
                    '<p>'+
                    data.results[i].name+
                    '</p></br>'+
                    '</div>'+
                    '<p>'+
                    data.results[i].vicinity+
                    '</p></br>'+
                    '<p>'+
                    ouverture+
                    '</p>'+
                    img+
                    '</div>'
                    );
                    infowindow.open(map, marker);
                }
            })(marker, i));
            google.maps.event.addListener(map, "click", function(event) {
            infowindow.close();
                });
        }
    });
}

var hideload = function(){
    $("#load").fadeOut()
}

setTimeout(hideload, 0);


