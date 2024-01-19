/* ----------------------------------------------------------------------*/
// Path Variables and Functions

function createCommonPaths(){
  //Rendering the paths to central from dorms with a directions renderer
 for(var i =0; i< farDormArray.length; i++){
      var request = {
      origin: farDormArray[i],
      destination: academicArray[0],
      travelMode: google.maps.TravelMode.WALKING
      };
      directionsService1.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK ) {
          var line= new google.maps.Polyline({
            path: result.routes[0].overview_path,
            strokeColor: "red",
            strokeOpacity: .75
          });
          studentRoute.push(line);
        }
      });
    }
  }

function createPartyPaths(){
  //Rendering the paths to central from dorms with a directions renderer
 for(var i =1; i< fratSArray.length; i++){
      var request = {
      origin: fratSArray[i-1],
      destination: fratSArray[i],
      travelMode: google.maps.TravelMode.WALKING
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK ) {
          var line= new google.maps.Polyline({
            path: result.routes[0].overview_path,
            strokeColor: "blue",
            strokeOpacity: .75 //,
     /*       icons: [{
              icon: people,
              offset: '100%'
              }]
*/
          });
          partyRoutes.push(line);
        }
      });
    }
          var line= new google.maps.Polyline({
            path: [fratSArray[0], fratSArray[3]],
            strokeColor: "blue",
            strokeOpacity: .75,
            icons: [{
              icon: people,
              offset: '100%'
              }]

          });

          partyRoutes.push(line);

  }

function createOtherPaths(){
  //Rendering the paths from central to hotspots with a directions renderer
  for(var i = 0; i< specialityLocations.length; i++){
      var request = {
      origin: academicArray[0],
      destination: specialityLocations[i],
      travelMode: google.maps.TravelMode.WALKING
      };
      directionsService2.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK ) {
          var line= new google.maps.Polyline({
            path: result.routes[0].overview_path,
            strokeColor: "green",
            strokeOpacity: .75
          });
          specialPaths.push(line);
        }
      });
  }
}


//CommonPaths
function showCommonPaths(){
if ( document.getElementById("sR").innerHTML == "Student Routes"){
  for( var i =0; i<studentRoute.length; i++)
    studentRoute[i].setMap(map);
    document.getElementById("sR").innerHTML ='Remove Routes';
  }else{
  for( var i =0; i<studentRoute.length; i++)
    studentRoute[i].setMap(null);
    document.getElementById("sR").innerHTML ='Student Routes';
  }
}

function showVisitorPaths(){
if ( document.getElementById("vR").innerHTML == "Visitor Routes"){
 for( var i =0; i<tourPaths.length; i++)
    tourPaths[i].setMap(map);
    document.getElementById("vR").innerHTML = 'Remove Routes';
  }else{
 for( var i =0; i<tourPaths.length; i++)
    tourPaths[i].setMap(null);
    document.getElementById("vR").innerHTML = 'Visitor Routes';
  }
}// Special Paths
function showSpecialPaths(){
if ( document.getElementById("oR").innerHTML == "Other Routes"){
 for( var i =0; i<specialPaths.length; i++)
    specialPaths[i].setMap(map);
    document.getElementById("oR").innerHTML ='Remove Routes';
  }else{
 for( var i =0; i<specialPaths.length; i++)
    specialPaths[i].setMap(null);
    document.getElementById("oR").innerHTML ='Other Routes';
  }
}

function showPartyPaths(){
if ( document.getElementById("pR").innerHTML == "Party Routes"){
  for( var i =0; i<partyRoutes.length; i++)
    partyRoutes[i].setMap(map);
    document.getElementById("pR").innerHTML ='Remove Routes';
  }else{
  for( var i =0; i<partyRoutes.length; i++)
    partyRoutes[i].setMap(null);
    document.getElementById("pR").innerHTML ='Party Routes';
  }
}

