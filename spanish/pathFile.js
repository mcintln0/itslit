//Creating the Paths  

function Path(src,dst,color,path){
    this.source      = src;
    this.destination = dst;
    this.color       = color;
    this.path        = path;
    this.toString = function(){
                  return "<p>Source : " + this.source
                        +"<br>Destination : " + this.destination
                        ;
                }
  }

function makeParty(clr){
   for(var i=0;i< partyPath.length;i++){
      if(clr === undefined){
          rou = new google.maps.Polyline({
                     path: google.maps.geometry.encoding.decodePath(  partyPath[i].path )
                  ,  strokeColor: partyPath[i].color 
                           });
     }else{
          rou = new google.maps.Polyline({
                     path: google.maps.geometry.encoding.decodePath(  partyPath[i].path )
                  ,  strokeColor: clr 
                           });
     }
         partyRoute.push(rou);
   }
}

function showParty(chosenMap){
 if ( document.getElementById("pR").innerHTML == "Show Weekend Routes"){
   for(var i=0;i< partyRoute.length;i++)
     partyRoute[i].setMap(chosenMap);

    document.getElementById("pR").innerHTML ='Hide Weekend Routes';

  }else{
   for(var i=0;i< partyRoute.length;i++)
     partyRoute[i].setMap(null);

  document.getElementById('pR').innerHTML ='Show Weekend Routes';

  }
}

function makeStudent(clr){
   for(var i=0;i< studentPath.length;i++){
     if(clr === undefined){
          rou = new google.maps.Polyline({
                     path: google.maps.geometry.encoding.decodePath(  studentPath[i].path )
                  ,  strokeColor: studentPath[i].color 
                             });
     }else{
          rou = new google.maps.Polyline({
                     path: google.maps.geometry.encoding.decodePath(  studentPath[i].path )
                  ,  strokeColor: clr 
                             });
     }
         studentRoute.push(rou);
  }
}

function showStudent(chosenMap){
 if ( document.getElementById("sR").innerHTML == "Show Student Routes"){
   for(var i=0;i< studentRoute.length;i++)
     studentRoute[i].setMap(chosenMap);

    document.getElementById("sR").innerHTML ='Hide Student Routes';

  }else{
   for(var i=0;i< studentRoute.length;i++)
     studentRoute[i].setMap(null);

  document.getElementById('sR').innerHTML ='Show Student Routes';

  }
}






