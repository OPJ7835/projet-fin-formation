    function initMap() {
        var location = { lat: 5.3167, lng: -4.0333 }; 
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: location,
            mapTypeControl: false,
            streetViewControl: false
        });
        var marker = new google.maps.Marker({ 
            position: location, 
            map: map,
            title: 'Eau Douce Poissons Frais'
        });
    }
