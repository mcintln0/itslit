// Building Polygon Information

//var dorms, academicBuildings, fratHouses, otherPlaces;

//Function for the building
function Building(name, build, point, type, dsc){
    this.name        = name;
    this.building    = build;
    this.point       = point;
    this.type        = type;
    this.description = dsc;
    this.toString    = function(){
                  return "<p>Name : " + this.name
                        +"<br>Type : " + this.type
                        +"<br>Description : " + this.description
                        ;
                }
  }

//Function for the Info Window
var currentW;
function showInfoWin(a, d, chosenMap) {

  google.maps.event.addListener(d,'click', function(){
    var inf = new google.maps.InfoWindow({
      content:
              '<div style="width: 300px; height: auto; border:2px solid; padding: 2px;">'
              + '<span style="font-size: 12pt;">'
              + a.toString()
              + '</span></div>'
      ,

      position: a.point});
    if (currentW != null) {currentW.close();}
    inf.open(chosenMap);
    currentW=inf;
  });
}


/*-------------------All the Buildings-------------------*/

function showAll(chosenMap){
  for(var i =0; i < academics.length; i++)
    academics[i].setMap(chosenMap);

  for(var i =0; i < dorms.length; i++)
    dorms[i].setMap(chosenMap);

  for(var i =0; i < frats.length; i++)
    frats[i].setMap(chosenMap);

  for(var i =0; i < themes.length; i++)
    themes[i].setMap(chosenMap);

  for(var i =0; i < soros.length; i++)
    soros[i].setMap(chosenMap);
}

//Res Life
function addDorms(chosenMap,clr){

  for(var i =0; i < dorm.length; i++){
    if (clr === undefined){
      dor = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: 'red',
        path: dorm[i].building
        });

   }else{
      dor = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: clr, 
        path: dorm[i].building
        });
   } 

  dorms.push(dor);
  showInfoWin(dorm[i],dor,chosenMap);

  }

}


function resOnly(chosenMap){
  for(var i =0; i < academics.length; i++)
    academics[i].setMap();

  for(var i =0; i < dorms.length; i++)
    dorms[i].setMap(chosenMap);

  for(var i =0; i < frats.length; i++)
    frats[i].setMap(chosenMap);

  for(var i =0; i < themes.length; i++)
    themes[i].setMap(chosenMap);

  for(var i =0; i < soros.length; i++)
    soros[i].setMap(chosenMap);
}

/*------------------------Academics----------------------*/

//Academic buildings

function addAcademics(chosenMap,clr){
  for(var i =0; i < academic.length; i++){

    if (clr === undefined){
    ac = new google.maps.Polygon({
      map: chosenMap,
      strokeWeight: 2,
      strokeColor: 'black',
      fillColor: 'blue',
      path: academic[i].building
  });

   }else{
     ac  = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: clr, 
        path: academic[i].building
        });
   }
    academics.push(ac);
    showInfoWin(academic[i], ac,chosenMap);
  }
}

function academicsOnly(chosenMap){
  for(var i =0; i < academics.length; i++)
    academics[i].setMap(chosenMap);

  for(var i =0; i < dorms.length; i++)
    dorms[i].setMap();

  for(var i =0; i < frats.length; i++)
    frats[i].setMap();

  for(var i =0; i < themes.length; i++)
    themes[i].setMap();

  for(var i =0; i < soros.length; i++)
    soros[i].setMap();
}

/*---------------------------- Greeks--------------------------*/

//AddFratHouses
function addFrats(chosenMap,clr){
  for(var i =0; i < frat.length; i++){
    if (clr === undefined){
    fra = new google.maps.Polygon({
      map: chosenMap,
      strokeWeight: 2,
      strokeOpacity: .8,
      strokeColor: 'black',
      fillColor: 'grey',
      path: frat[i].building
  });

   }else{
      fra = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: clr, 
        path: frat[i].building
        });
   }
    frats.push(fra);
    showInfoWin(frat[i],fra,chosenMap);
  }

}


// Add Sorority Houses
function addSoros(chosenMap,clr){
  for(var i =0; i < sors.length; i++){
    if (clr === undefined){
    sor = new google.maps.Polygon({
      map: chosenMap,
      strokeWeight: 2,
      strokeOpacity: .8,
      strokeColor: 'black',
      fillColor: 'pink',
      path: sors[i].building
  });

   }else{
    sor = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: clr, 
        path: sors[i].building
        });
   }
    soros.push(sor);
    showInfoWin(sors[i],sor,chosenMap);
  }
}


function greekOnly(chosenMap){
  for(var i =0; i < academics.length; i++)
    academics[i].setMap();

  for(var i =0; i < dorms.length; i++)
    dorms[i].setMap();

  for(var i =0; i < frats.length; i++)
    frats[i].setMap(chosenMap);

  for(var i =0; i < themes.length; i++)
    themes[i].setMap();

  for(var i =0; i < soros.length; i++)
    soros[i].setMap(chosenMap);

}



// Add Theme Houses
function addTheme(chosenMap,clr){
  for(var i =0; i < theme.length; i++){
    if (clr === undefined){
    the = new google.maps.Polygon({
      map: chosenMap,
      strokeWeight: 2,
      strokeOpacity: .8,
      strokeColor: 'black',
      fillColor: 'green',
      path: theme[i].building
  });

   }else{
      the = new google.maps.Polygon({
        map: chosenMap,
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeColor: 'black',
        fillColor: clr, 
        path: theme[i].building
        });
   }
    themes.push(the);
    showInfoWin(theme[i],the,chosenMap);
  }
}




//Other University Buildings
function addUniv(chosenMap){}
 /* for(var i =0; i < univArray.length; i++)
  new google.maps.Polygon({
      map: chosenMap,
      strokeWeight: 2,
      strokeColor: 'black',
      fillColor: 'yellow',
      path: univArray[i]
  });
}

*/


