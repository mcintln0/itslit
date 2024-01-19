//Generating the google paths

// for( var i = 1; i< academicArray.length; i++){

    var request = {
    origin: academicArray[i],
    destination: academicArray[i-1],
    travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK){ 
        directionsDisplay.setDirections(result)


/* var decodedPath = google.maps.geometry.encoding.decodePath(result.routes.overview_polylines);
       routes[i] = new google.maps.Polyline({
                           path: decodedPath,
                           strokeColor: "red"
                             });
      }
    });
  } 8/

