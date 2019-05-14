function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 59.328070,
            lng: 18.049310
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        { lat: 25.062939, lng: -77.490016 },
        { lat: 25.502612, lng: -76.632011 },
        { lat: 45.045120, lng: 6.306490 },
        { lat: 40.787892, lng: -73.956591 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
