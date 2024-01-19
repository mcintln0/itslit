/* -----------------------------------------------------*/
// Button Functions 

//Sets map center of campus
function center(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.204289, -85.919501 ));
          chosenMap.setZoom(17);
}

//Sets map center to cross road
function cross(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng( 35.195250, -85.93));
          chosenMap.setZoom(16);
}

//Sets map center to Gorgas and SoT
function gst(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.196821, -85.925173 ));
          chosenMap.setZoom(18);
}

//Sets map center near gym
function gym(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.208402, -85.919964 ));
          chosenMap.setZoom(17);
}

//Sets map center near Tuckaway, Hunter, and Cleaveland
function thc(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.201646, -85.921616 ));
          chosenMap.setZoom(18);
}

//Sets map center near MCC, Ayres, and Barnswell Apartments
function mab(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng( 35.201506, -85.918720));
          chosenMap.setZoom(18);
}

//Sets map center near Courts and Trez 
function cot(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng( 35.206310, -85.912849));
          chosenMap.setZoom(18);
}

//Sets map center near Benedict, DKE, and Wick
function bdw(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng( 35.206218, -85.917109));
          chosenMap.setZoom(18);
}

//Sets map center near Humphrey's, Sterlings, and art building
function ash(chosenMap){
          chosenMap.setCenter(new google.maps.LatLng(35.20507,-85.91508));
          chosenMap.setZoom(18);
}

//Sets map center on Bishop Commons
function bc(chosenMap){
          chosenMap.setCenter(new google.maps.LatLng(35.20608,-85.91883));
          chosenMap.setZoom(18);
}

//Sets map center near Farm and Faculty Housing 
function faf(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.211819,  -85.935974));
          chosenMap.setZoom(16);
}
//Sets map view campus wide
function al(chosenMap, zoom){
  if(zoom === undefined){
          chosenMap.setCenter(  new google.maps.LatLng(35.201646, -85.921616 ));
          chosenMap.setZoom(15);
  }else{
          chosenMap.setCenter(  new google.maps.LatLng(35.201646, -85.921616 ));
          chosenMap.setZoom(zoom);
  }

}

//Sets map view to academic buildings 
function aca(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.2036, -85.9172 ));
          chosenMap.setZoom(17);
}

//Sets map view near Phillips and Hodgeson
function phh(chosenMap){
          chosenMap.setCenter( new google.maps.LatLng(35.205716, -85.928844));
          chosenMap.setZoom(18);
}

