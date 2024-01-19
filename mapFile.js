/* LaToya McIntyre
   CS286 Google Maps
   Spring 2020
*/

// This file holds all the map functions required for the website.

// Creates the map
function initMap(mapID){
return new google.maps.Map(document.getElementById(mapID),{
        center: {lat: 35.204289, lng: -85.919501  },
        zoom:16,
        mapTypeId: google.maps.MapTypeId.Map,
        mapTypeControl:true,
        streetViewControl: false,
        rotateControl: false,
        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_BOTTOM},
        fullscreenControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
        mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
      }); 
}

// Sets map coloring back to the default
function defaultMap(chosenMap){
        chosenMap.setOptions({ styles: [
           {
             elementType: 'geometry', 
             stylers: [{color: 'revert'}]
           },
           {
             featureType: 'road',
             elementType: 'geometry',
             stylers: [{color: 'revert'}]
           }
                                   ] 
            });

//Removing all the lights from the chosen map
    for (var i; i< markers.length;i++)
        markers[i].setMap(null);
      markerCluster.clearMarkers();
  document.getElementById('sL').innerHTML ='Lights';

   lightMap.setMap(null);
   document.getElementById('lM').innerHTML = 'Night Time';

//Adding all the building Back
  showAll(map);

}



