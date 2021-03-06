initAutocomplete = function(){
    var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -33.8688, lng: 151.2195},
	zoom: 13,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var markers = [];
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    searchBox.addListener('places_changed', function() {
	var places = searchBox.getPlaces();
	
	if (places.length == 0) {
	    return;
	}
	
	// Clear out the old markers.
	markers.forEach(function(marker) {
	    marker.setMap(null);
	});
	markers = [];
	
	// For each place, get the icon, name and location.
	var bounds = new google.maps.LatLngBounds();
	places.forEach(function(place) {
	    var icon = {
		url: place.icon,
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(25, 25)
	    };
	    
	    // Create a marker for each place.
	    markers.push(new google.maps.Marker({
		map: map,
		icon: icon,
		title: place.name,
		position: place.geometry.location
	    }));
	});
	console.log(places);
    });
}
