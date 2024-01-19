/* -----------------------------------------------------------*/
//Light Functions 

//Creates the Markers
function createMarkers(){
    for (i=0; i<lights.length; i++){
      if(lights[i].Working == 'No'){
       var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) ,
       title:  lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
       label: 'X',
       animation: google.maps.Animation.BOUNCE
          });
      }else  if(lights[i].Exists == 'No'){
       var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lights[i].Location.Latitude,
                                        lights[i].Location.Longitude) ,
       title: lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
       icon: { url: "http://labs.google.com/ridefinder/images/mm_20_blue.png" },
       animation: google.maps.Animation.BOUNCE
             });

      }else if(lights[i].Type == 'Black Lamp'){
       var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) ,
       title:  lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
       icon: { url: "images/blackLamp.png", scaledSize: new google.maps.Size(30,30)},
             });
 }else if(lights[i].Type == 'Street Light'){
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude),
        title:  lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
        icon: { url: "images/streetLamp.png",  scaledSize: new google.maps.Size(30, 30) },
             });
      }else if(lights[i].Type == 'Double Light'){
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lights[i].Location.Latitude,
                                         lights[i].Location.Longitude),
        title:  lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
        icon: { url: "images/double.png",     scaledSize: new google.maps.Size(30, 30) }
             });
      }else if(lights[i].Type == 'Parking Lot'){
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lights[i].Location.Latitude,
                                         lights[i].Location.Longitude),
        title: lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
        icon: { url: "images/parking.png",     scaledSize: new google.maps.Size(30, 30) }});
      }else if(lights[i].Type == 'Tree Light'){
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lights[i].Location.Latitude,
                                         lights[i].Location.Longitude),
        title: lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
        icon: { url: "images/nature.png",     scaledSize: new google.maps.Size(30, 30) }});
       }else{
       var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) ,
       title:  lights[i].Name
               + "<br>Type of Light: "
               + lights[i].Type
               + "<br>Working: "
               + lights[i].Working
               + "<br>(" + lights[i].Location.Latitude
               + " , " + lights[i].Location.Longitude +")",
        icon: { url: "images/light-bulb.png",     scaledSize: new google.maps.Size(30, 30) }});
      }
   google.maps.event.addListener(marker, 'click', function() {showInfoWindow(this)});
   markers.push(marker);
     }
   return markers;
   }


var currentWindow;
function showInfoWindow(m,chosenMap) {
  var info = new google.maps.InfoWindow({
      content: '<div style="width: 300px; height: auto; border:2px solid; padding: 2px;">'
              +'<span style="font-size:12pt;">'
              + m.title
              + '</span></div>'
  });
  if (currentWindow != null) {currentWindow.close();}
  info.open(chosenMap, m);
  currentWindow=info;
}

// Creates the heat map of Sewanee lights
function createLMap(){
   lightMap = new google.maps.visualization.HeatmapLayer({
   data: data,
   gradient: [
              'rgba(  0,   0,   0,    0.95)'  // black
             ,'rgba(255, 255, 0,    0.95)'  // yellow
             ]});

   for (i=0; i<lights.length;i++){
    if(lights[i].Exists == 'No'){
   } else if(lights[i].Works == 'No'){
   } else if(lights[i].Type == 'Black Lamp'){
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: .75});
   } else if(lights[i].Type == 'Street Light')
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 3});
    else if(lights[i].Type == 'Tree Lamp')
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) ,weight: 1});
    else if(lights[i].Type == 'Double Lamp')
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 2});
    else if(lights[i].Type == 'Parking Lot')
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 4});
    else
       data.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: .5});
   }
}

//Show the markers
function showLights(chosenMap){
 if ( document.getElementById("sL").innerHTML == "Lights"){
    for (var i; i< markers.length;i++)
        markers[i].setMap(chosenMap);
      markerCluster.addMarkers(markers);
    document.getElementById("sL").innerHTML ='Remove';
  }else{
    for (var i; i< markers.length;i++)
        markers[i].setMap(null);
      markerCluster.clearMarkers();
  document.getElementById('sL').innerHTML ='Lights';
  }
}

// Shows Sewanee lights at night aka the heat map
function showLMap(chosenMap){
  if (document.getElementById('lM').innerHTML == 'Night Time'){
     lightMap.setMap(chosenMap);

         chosenMap.setOptions({ styles: [
              {elementType: 'geometry',
                stylers: [{color: '#000000'}]
              },
              {featureType: 'road',
               elementType: 'geometry',
               stylers: [{color: '#FFFFFF'}]
              },
              {elementType: 'labels',
               stylers: [ {visibility: 'off'}]
              }

               ] });
    document.getElementById('lM').innerHTML = 'Hide Night Time';
  }else{
   defaultMap(chosenMap);
   lightMap.setMap(null);
   document.getElementById('lM').innerHTML ='Night Time';
  }

}


//create ideal lighting map
function createIdeal(chosenMap){
   idealMap = new google.maps.visualization.HeatmapLayer({
   data: dataI,
   gradient: [
              'rgba(  0,   0,   0,    0.95)'  // black
             ,'rgba(255, 255, 0,    0.95)'  // yellow
             ]});

   for (i=0; i<lights.length;i++){
     if(lights[i].Type == 'Black Lamp'){
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 2});
   } else if(lights[i].Type == 'Street Light')
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 4});
    else if(lights[i].Type == 'Tree Lamp')
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) ,weight: 3});
    else if(lights[i].Type == 'Double Lamp')
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 4});
    else if(lights[i].Type == 'Parking Lot')
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 5});
    else
       dataI.push({location: new google.maps.LatLng(lights[i].Location.Latitude,lights[i].Location.Longitude) , weight: 1});
   }
}

//Show ideal lighting situation
function showIdeal(chosenMap){
  if ( document.getElementById('iM').innerHTML =='Ideal'){
     idealMap.setMap(chosenMap);

         chosenMap.setOptions({ styles: [
              {elementType: 'geometry',
                stylers: [{color: '#000000'}]
              },
              {featureType: 'road',
               elementType: 'geometry',
               stylers: [{color: '#FFFFFF'}]
              },
              {elementType: 'labels',
               stylers: [ {visibility: 'off'}]
              }

               ] });
     document.getElementById('iM').innerHTML = 'Hide Ideal';
   }else{
     idealMap.setMap(null);
     document.getElementById('iM').innerHTML = 'Ideal';
    }
}
