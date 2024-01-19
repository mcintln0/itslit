function Building(name, build, point, type, dsc){
    this.name      = name;
    this.building  = build;
    this.point = point;
    this.type      = type;
    this.description = dsc;
    this.toString  = function(){
                  return "<p>Name : " + this.name
                        +"<br>Type : " + this.type
                        +"<br>Description : " + this.description
                        ;
                }
  }



var frat = [

new Building(
 "SNU",

[new google.maps.LatLng(35.20813,-85.91910),
new google.maps.LatLng(35.20810,-85.91908),
new google.maps.LatLng(35.20808,-85.91915),
new google.maps.LatLng(35.20810,-85.91917),
new google.maps.LatLng(35.20807,-85.91924),
new google.maps.LatLng(35.20813,-85.91928),
new google.maps.LatLng(35.20824,-85.91903),
new google.maps.LatLng(35.20818,-85.91899)],

new google.maps.LatLng(35.20824,-85.91903),

"Greek Houses",
"Sigma Nu Fraternity"),

new Building(
 "ATO",

[new google.maps.LatLng(35.20615,-85.92096),
new google.maps.LatLng(35.20614,-85.92091),
new google.maps.LatLng(35.20609,-85.92092),
new google.maps.LatLng(35.20610,-85.92098),
new google.maps.LatLng(35.20606,-85.92099),
new google.maps.LatLng(35.20607,-85.92103),
new google.maps.LatLng(35.20611,-85.92103),
new google.maps.LatLng(35.20612,-85.92106),
new google.maps.LatLng(35.20607,-85.92107),
new google.maps.LatLng(35.20609,-85.92117),
new google.maps.LatLng(35.20619,-85.92114),
new google.maps.LatLng(35.20617,-85.92104),
new google.maps.LatLng(35.20621,-85.92103),
new google.maps.LatLng(35.20620,-85.92095)],

new google.maps.LatLng(35.20621,-85.92103),

"Greek Houses",
"Alpha Theta Omega Fraternity"),

new Building(
 "Phi Society",

[new google.maps.LatLng(35.20737,-85.92006),
new google.maps.LatLng(35.20726,-85.92011),
new google.maps.LatLng(35.20729,-85.92020),
new google.maps.LatLng(35.20739,-85.92016)],

new google.maps.LatLng(35.20729,-85.92020),

"Greek Houses",
"Phi Society"),

new Building(
 "SAE",

[new google.maps.LatLng(35.20699,-85.91806),
new google.maps.LatLng(35.20694,-85.91811),
new google.maps.LatLng(35.20692,-85.91808),
new google.maps.LatLng(35.20688,-85.91812),
new google.maps.LatLng(35.20683,-85.91805),
new google.maps.LatLng(35.20688,-85.91800),
new google.maps.LatLng(35.20683,-85.91793),
new google.maps.LatLng(35.20688,-85.91787),
new google.maps.LatLng(35.20692,-85.91791),
new google.maps.LatLng(35.20696,-85.91786),
new google.maps.LatLng(35.20704,-85.91796),
new google.maps.LatLng(35.20698,-85.91803)],

new google.maps.LatLng(35.20704,-85.91796),

"Greek Houses",
"Sigma Alpha Epsilon Fraternity"),

new Building(
 "Delt",

[new google.maps.LatLng(35.20765,-85.91669),
new google.maps.LatLng(35.20763,-85.91686),
new google.maps.LatLng(35.20747,-85.91684),
new google.maps.LatLng(35.20748,-85.91681),
new google.maps.LatLng(35.20740,-85.91680),
new google.maps.LatLng(35.20742,-85.91666)],

new google.maps.LatLng(35.20740,-85.91680),

"Greek Houses",
"Delta Tau Delta Fraternity"),

new Building(
 "KA",

[new google.maps.LatLng(35.20812,-85.91545),
new google.maps.LatLng(35.20806,-85.91552),
new google.maps.LatLng(35.20803,-85.91547),
new google.maps.LatLng(35.20800,-85.91550),
new google.maps.LatLng(35.20794,-85.91543),
new google.maps.LatLng(35.20795,-85.91542),
new google.maps.LatLng(35.20789,-85.91534),
new google.maps.LatLng(35.20790,-85.91533),
new google.maps.LatLng(35.20789,-85.91532),
new google.maps.LatLng(35.20791,-85.91529),
new google.maps.LatLng(35.20792,-85.91531),
new google.maps.LatLng(35.20799,-85.91524),
new google.maps.LatLng(35.20805,-85.91532),
new google.maps.LatLng(35.20806,-85.91531),
new google.maps.LatLng(35.20811,-85.91539),
new google.maps.LatLng(35.20809,-85.91541)],

new google.maps.LatLng(35.20811,-85.91539),

"Greek Houses",
"Kappa Alpha Fraternity"),

new Building(
 "Gamma",

[new google.maps.LatLng(35.20616,-85.91464), 
new google.maps.LatLng(35.20606,-85.91458), 
new google.maps.LatLng(35.20609,-85.91449),
new google.maps.LatLng(35.20627,-85.91460),
new google.maps.LatLng(35.20624,-85.91471),
new google.maps.LatLng(35.20615,-85.91467),
new google.maps.LatLng(35.20616,-85.91464)],

new google.maps.LatLng(35.20615,-85.91467),

"Greek Houses",
"Gamma Sigma Phi Fraternity"),

new Building(
 "Chi Psi",

[new google.maps.LatLng(35.20434,-85.91363),
new google.maps.LatLng(35.20435,-85.91362),
new google.maps.LatLng(35.20431,-85.91353),
new google.maps.LatLng(35.20436,-85.91350),
new google.maps.LatLng(35.20438,-85.91355),
new google.maps.LatLng(35.20445,-85.91349),
new google.maps.LatLng(35.20451,-85.91361),
new google.maps.LatLng(35.20444,-85.91367),
new google.maps.LatLng(35.20447,-85.91373),
new google.maps.LatLng(35.20443,-85.91377),
new google.maps.LatLng(35.20438,-85.91367),
new google.maps.LatLng(35.20437,-85.91368)],

new google.maps.LatLng(35.20438,-85.91367),

"Greek Houses",
"Chi Psi Fraternity"),

new Building(
 "DKE",

[new google.maps.LatLng(35.20396,-85.91390),
new google.maps.LatLng(35.20394,-85.91403),
new google.maps.LatLng(35.20387,-85.91402),
new google.maps.LatLng(35.20388,-85.91391),
new google.maps.LatLng(35.20385,-85.91383),
new google.maps.LatLng(35.20390,-85.91380)],

new google.maps.LatLng(35.20385,-85.91383),

"Greek Houses",
"Delta Kappa Epsilon Fraternity"),

new Building(
 "Phi Gamma",

[new google.maps.LatLng(35.20154,-85.92025),
new google.maps.LatLng(35.20157,-85.92022),
new google.maps.LatLng(35.20157,-85.92021),
new google.maps.LatLng(35.20166,-85.92014),
new google.maps.LatLng(35.20173,-85.92029),
new google.maps.LatLng(35.20169,-85.92032),
new google.maps.LatLng(35.20170,-85.92033),
new google.maps.LatLng(35.20165,-85.92037),
new google.maps.LatLng(35.20163,-85.92035),
new google.maps.LatLng(35.20160,-85.92037)],

new google.maps.LatLng(35.20163,-85.92035),

"Greek Houses",
"Phi Gamma Fraternity"),

new Building(
 "Lambda",

[new google.maps.LatLng(35.20140,-85.91816),
new google.maps.LatLng(35.20125,-85.91803),
new google.maps.LatLng(35.20121,-85.91810),
new google.maps.LatLng(35.20126,-85.91815),
new google.maps.LatLng(35.20120,-85.91827),
new google.maps.LatLng(35.20126,-85.91832),
new google.maps.LatLng(35.20132,-85.91821),
new google.maps.LatLng(35.20136,-85.91824)],

new google.maps.LatLng(35.20126,-85.91832),

"Greek Houses",
"Lambda Chi Alpha Fraternity")
]
