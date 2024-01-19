//Array created in 2019 by LaToya McIntyre Computer Science Major '20
// Using Building Information from a previous student

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

var dorm = [

new Building( "Cannon",

          [ new google.maps.LatLng(35.20464,-85.92246),
            new google.maps.LatLng(35.20471,-85.92246),
            new google.maps.LatLng(35.20471,-85.92249),
            new google.maps.LatLng(35.20477,-85.92250),
            new google.maps.LatLng(35.20477,-85.92256),
            new google.maps.LatLng(35.20473,-85.92257),
            new google.maps.LatLng(35.20473,-85.92271),
            new google.maps.LatLng(35.20477,-85.92270),
            new google.maps.LatLng(35.20477,-85.92277),
            new google.maps.LatLng(35.20473,-85.92277),
            new google.maps.LatLng(35.20473,-85.92278),
            new google.maps.LatLng(35.20469,-85.92279),
            new google.maps.LatLng(35.20469,-85.92282),
            new google.maps.LatLng(35.20464,-85.92282),
            new google.maps.LatLng(35.20464,-85.92268),
            new google.maps.LatLng(35.20465,-85.92268)],

          new google.maps.LatLng(35.20468,-85.92264),
          "Residential",
          "Dormatory"),

new Building( "Smith",

          [ new google.maps.LatLng(35.20449,-85.92187),
            new google.maps.LatLng(35.20450,-85.92186),
            new google.maps.LatLng(35.20457,-85.92185),
            new google.maps.LatLng(35.20458,-85.92187),
            new google.maps.LatLng(35.20464,-85.92191),
            new google.maps.LatLng(35.20465,-85.92200),
            new google.maps.LatLng(35.20471,-85.92200),
            new google.maps.LatLng(35.20472,-85.92193),
            new google.maps.LatLng(35.20482,-85.92193),
            new google.maps.LatLng(35.20484,-85.92198),
            new google.maps.LatLng(35.20488,-85.92237),
            new google.maps.LatLng(35.20480,-85.92241),
            new google.maps.LatLng(35.20473,-85.92235),
            new google.maps.LatLng(35.20472,-85.92220),
            new google.maps.LatLng(35.20468,-85.92221),
            new google.maps.LatLng(35.20466,-85.92227),
            new google.maps.LatLng(35.20461,-85.92233),
            new google.maps.LatLng(35.20458,-85.92231),
            new google.maps.LatLng(35.20458,-85.92233),
            new google.maps.LatLng(35.20453,-85.92231),
            new google.maps.LatLng(35.20451,-85.92228)],

          new google.maps.LatLng(35.20469,-85.92211),
          "Residential",
          "Dormatory"),

new Building( "Benedict",

          [ new google.maps.LatLng(35.20768,-85.91733),
            new google.maps.LatLng(35.20767,-85.91723),
            new google.maps.LatLng(35.20765,-85.91723),
            new google.maps.LatLng(35.20763,-85.91703),
            new google.maps.LatLng(35.20765,-85.91703),
            new google.maps.LatLng(35.20763,-85.91692),
            new google.maps.LatLng(35.20726,-85.91698),
            new google.maps.LatLng(35.20727,-85.91709),
            new google.maps.LatLng(35.20728,-85.91709),
            new google.maps.LatLng(35.20731,-85.91728),
            new google.maps.LatLng(35.20729,-85.91729),
            new google.maps.LatLng(35.20730,-85.91739),
            new google.maps.LatLng(35.20732,-85.91740),
            new google.maps.LatLng(35.20733,-85.91741),
            new google.maps.LatLng(35.20739,-85.91740),
            new google.maps.LatLng(35.20738,-85.91739),
            new google.maps.LatLng(35.20759,-85.91735),
            new google.maps.LatLng(35.20759,-85.91736),
            new google.maps.LatLng(35.20765,-85.91735),
            new google.maps.LatLng(35.20765,-85.91733)],

          new google.maps.LatLng(35.20746,-85.91716),
          "Residential",
          "Dormatory"),

new Building( "Saint Lukes",

          [ new google.maps.LatLng(35.20630,-85.91890),
            new google.maps.LatLng(35.20628,-85.91875),
            new google.maps.LatLng(35.20614,-85.91876),
            new google.maps.LatLng(35.20612,-85.91847),
            new google.maps.LatLng(35.20599,-85.91848),
            new google.maps.LatLng(35.20601,-85.91878),
            new google.maps.LatLng(35.20587,-85.91879),
            new google.maps.LatLng(35.20588,-85.91894)],

          new google.maps.LatLng(35.20608,-85.91883),
          "Residential",
          "Dormatory"),

new Building( "Hoffman",

          [ new google.maps.LatLng(35.20656,-85.91887),
            new google.maps.LatLng(35.20654,-85.91862),
            new google.maps.LatLng(35.20644,-85.91863),
            new google.maps.LatLng(35.20645,-85.91888)],

          new google.maps.LatLng(35.20650,-85.91875),
          "Residential",
          "Dormatory"),

new Building( "Humphreys",

          [ new google.maps.LatLng(35.20490,-85.91507),
            new google.maps.LatLng(35.20511,-85.91523),
            new google.maps.LatLng(35.20516,-85.91515),
            new google.maps.LatLng(35.20524,-85.91514),
            new google.maps.LatLng(35.20526,-85.91529),
            new google.maps.LatLng(35.20529,-85.91528),
            new google.maps.LatLng(35.20527,-85.91513),
            new google.maps.LatLng(35.20529,-85.91512),
            new google.maps.LatLng(35.20526,-85.91493),
            new google.maps.LatLng(35.20514,-85.91495),
            new google.maps.LatLng(35.20512,-85.91493),
            new google.maps.LatLng(35.20508,-85.91463),
            new google.maps.LatLng(35.20504,-85.91463),
            new google.maps.LatLng(35.20504,-85.91462),
            new google.maps.LatLng(35.20495,-85.91463),
            new google.maps.LatLng(35.20495,-85.91466),
            new google.maps.LatLng(35.20492,-85.91466),
            new google.maps.LatLng(35.20496,-85.91496)],

          new google.maps.LatLng(35.20507,-85.91508),
          "Residential",
          "Dormatory"),

new Building( "Hodgeson",

          [ new google.maps.LatLng(35.205108,-85.927785),
            new google.maps.LatLng(35.205064,-85.927847),
            new google.maps.LatLng(35.205007,-85.927780),
            new google.maps.LatLng(35.204997,-85.927793),
            new google.maps.LatLng(35.204968,-85.927764),
            new google.maps.LatLng(35.204925,-85.927821),
            new google.maps.LatLng(35.204980,-85.927887),
            new google.maps.LatLng(35.204951,-85.927927),
            new google.maps.LatLng(35.204984,-85.927964),
            new google.maps.LatLng(35.204945,-85.928013),
            new google.maps.LatLng(35.205156,-85.928256),
            new google.maps.LatLng(35.205241,-85.928129),
            new google.maps.LatLng(35.205222,-85.928112),
            new google.maps.LatLng(35.205240,-85.928081),
            new google.maps.LatLng(35.205217,-85.928050),
            new google.maps.LatLng(35.205267,-85.927967),
            new google.maps.LatLng(35.205197,-85.927883),
            new google.maps.LatLng(35.205158,-85.927933),
            new google.maps.LatLng(35.205128,-85.927896),
            new google.maps.LatLng(35.205164,-85.927844),
            new google.maps.LatLng(35.205110,-85.927786)],

          new google.maps.LatLng(35.20510,-85.92802),
          "Residential",
          "Dormatory"),

new Building( "Elliot",

          [ new google.maps.LatLng(35.200591, -85.921505),
            new google.maps.LatLng(35.200651,-85.921477),
            new google.maps.LatLng(35.200665,-85.921508),
            new google.maps.LatLng(35.200692,-85.921500),
            new google.maps.LatLng(35.200733,-85.921611),
            new google.maps.LatLng(35.200805,-85.921566),
            new google.maps.LatLng(35.200826,-85.921621),
            new google.maps.LatLng(35.200861,-85.921599),
            new google.maps.LatLng(35.200775,-85.921318),
            new google.maps.LatLng(35.200744,-85.921335),
            new google.maps.LatLng(35.200651,-85.921043),
            new google.maps.LatLng(35.200611,-85.921063),
            new google.maps.LatLng(35.200595,-85.921027),
            new google.maps.LatLng(35.200552,-85.921045),
            new google.maps.LatLng(35.200562,-85.921082),
            new google.maps.LatLng(35.200552,-85.921090),
            new google.maps.LatLng(35.200634,-85.921353),
            new google.maps.LatLng(35.200553,-85.921393),
            new google.maps.LatLng(35.200594,-85.921503)],

          new google.maps.LatLng(35.20075,-85.92140),
          "Residential",
          "Dormatory"),

new Building( "Tuckaway",

          [ new google.maps.LatLng(35.201358,-85.922125),
            new google.maps.LatLng(35.201369,-85.922282),
            new google.maps.LatLng(35.201232,-85.922303),
            new google.maps.LatLng(35.201252,-85.922483),
            new google.maps.LatLng(35.201138,-85.922509),
            new google.maps.LatLng(35.201105,-85.922206),
            new google.maps.LatLng(35.201116,-85.922205),
            new google.maps.LatLng(35.201112,-85.922133),
            new google.maps.LatLng(35.201174,-85.922125),
            new google.maps.LatLng(35.201178,-85.922144)],

          new google.maps.LatLng(35.20120,-85.92223),
          "Residential",
          "Dormatory"),


new Building( "Hunter",

          [ new google.maps.LatLng(35.200476,-85.920133),
            new google.maps.LatLng(35.200510,-85.920126),
            new google.maps.LatLng(35.200513,-85.920138),
            new google.maps.LatLng(35.200554,-85.920131),
            new google.maps.LatLng(35.200553,-85.920118),
            new google.maps.LatLng(35.200818,-85.920076),
            new google.maps.LatLng(35.200822,-85.920091),
            new google.maps.LatLng(35.200857,-85.920085),
            new google.maps.LatLng(35.200853,-85.920069),
            new google.maps.LatLng(35.200888,-85.920057),
            new google.maps.LatLng(35.200877,-85.919985),
            new google.maps.LatLng(35.200843,-85.919986),
            new google.maps.LatLng(35.200835,-85.919936),
            new google.maps.LatLng(35.200503,-85.919995),
            new google.maps.LatLng(35.200507,-85.920039),
            new google.maps.LatLng(35.200468,-85.920046)],

          new google.maps.LatLng(35.20070,-85.92004),
          "Residential",
          "Dormatory"),


new Building( "Quintard",


          [ new google.maps.LatLng(35.197490,-85.925491),
            new google.maps.LatLng(35.197786,-85.924912),
            new google.maps.LatLng(35.197697,-85.924846),
            new google.maps.LatLng(35.197412,-85.925423)],

            new google.maps.LatLng(35.19760,-85.92516),

          "Residential",
          "Dormatory"),


new Building( "Gorgas",

          [ new google.maps.LatLng(35.197333,-85.925771),
            new google.maps.LatLng(35.197241,-85.925699),
            new google.maps.LatLng(35.197062,-85.926085),
            new google.maps.LatLng(35.196921,-85.925977),
            new google.maps.LatLng(35.196916,-85.925984),
            new google.maps.LatLng(35.196893,-85.925971),
            new google.maps.LatLng(35.196872,-85.926029),
            new google.maps.LatLng(35.196888,-85.926045),
            new google.maps.LatLng(35.196870,-85.926088),
            new google.maps.LatLng(35.197097,-85.926265),
            new google.maps.LatLng(35.197147,-85.926160),
            new google.maps.LatLng(35.197137,-85.926154),
            new google.maps.LatLng(35.197274,-85.925870),
            new google.maps.LatLng(35.197282,-85.925877)],

          new google.maps.LatLng(35.19715,-85.92599),
          "Residential",
          "Dormatory"),


new Building( "Cleveland",

          [ new google.maps.LatLng(35.202297,-85.921872),
            new google.maps.LatLng(35.202672,-85.921823),
            new google.maps.LatLng(35.202661,-85.921669),
            new google.maps.LatLng(35.202503,-85.921693),
            new google.maps.LatLng(35.202501,-85.921684),
            new google.maps.LatLng(35.202437,-85.921685),
            new google.maps.LatLng(35.202440,-85.921694),
            new google.maps.LatLng(35.202284,-85.921723)],

          new google.maps.LatLng(35.20247,-85.92175),
          "Residential",
          "Dormatory"),


new Building( "Trez",

          [ new google.maps.LatLng(35.206012,-85.912268),
            new google.maps.LatLng(35.206019,-85.912200),
            new google.maps.LatLng(35.205995,-85.912195),
            new google.maps.LatLng(35.205997,-85.912164),
            new google.maps.LatLng(35.205692,-85.912110),
            new google.maps.LatLng(35.205676,-85.912098),
            new google.maps.LatLng(35.205681,-85.912076),
            new google.maps.LatLng(35.205664,-85.912069),
            new google.maps.LatLng(35.205682,-85.912025),
            new google.maps.LatLng(35.205617,-85.911994),
            new google.maps.LatLng(35.205422,-85.912446),
            new google.maps.LatLng(35.205493,-85.912502),
            new google.maps.LatLng(35.205502,-85.912478),
            new google.maps.LatLng(35.205526,-85.912494),
            new google.maps.LatLng(35.205732,-85.912775),
            new google.maps.LatLng(35.205747,-85.912759),
            new google.maps.LatLng(35.205775,-85.912794),
            new google.maps.LatLng(35.205822,-85.912741),
            new google.maps.LatLng(35.205570,-85.912400),
            new google.maps.LatLng(35.205551,-85.912387),
            new google.maps.LatLng(35.205634,-85.912201),
            new google.maps.LatLng(35.205656,-85.912216),
            new google.maps.LatLng(35.206009,-85.912268)],

          new google.maps.LatLng(35.205545, -85.912272),
          "Residential",
          "Male only Dormatory"),


new Building( "Courts",

          [ new google.maps.LatLng(35.204958,-85.913805),
            new google.maps.LatLng(35.205110,-85.913781),
            new google.maps.LatLng(35.205109,-85.913768),
            new google.maps.LatLng(35.205182,-85.913758),
            new google.maps.LatLng(35.205184,-85.913769),
            new google.maps.LatLng(35.205342,-85.913744),
            new google.maps.LatLng(35.205353,-85.913844),
            new google.maps.LatLng(35.205335,-85.913848),
            new google.maps.LatLng(35.205347,-85.913958),
            new google.maps.LatLng(35.205368,-85.913958),
            new google.maps.LatLng(35.205381,-85.914065),
            new google.maps.LatLng(35.204998,-85.914132),
            new google.maps.LatLng(35.204982,-85.914025),
            new google.maps.LatLng(35.205004,-85.914020),
            new google.maps.LatLng(35.204990,-85.913915),
            new google.maps.LatLng(35.204974,-85.913916),
            new google.maps.LatLng(35.204958,-85.913809)],


          new google.maps.LatLng(35.205150, -85.913943),

          "Residential",
          "Dormatory"),


new Building( "Phillips",

          [ new google.maps.LatLng(35.205745,-85.928831),
            new google.maps.LatLng(35.205760,-85.928844),
            new google.maps.LatLng(35.205865,-85.928691),
            new google.maps.LatLng(35.205932,-85.928755),
            new google.maps.LatLng(35.205877,-85.928847),
            new google.maps.LatLng(35.205998,-85.928961),
            new google.maps.LatLng(35.205925,-85.929071),
            new google.maps.LatLng(35.205871,-85.929017),
            new google.maps.LatLng(35.205849,-85.929049),
            new google.maps.LatLng(35.205805,-85.929004),
            new google.maps.LatLng(35.205832,-85.928972),
            new google.maps.LatLng(35.205788,-85.928927),
            new google.maps.LatLng(35.205730,-85.929015),
            new google.maps.LatLng(35.205686,-85.928967),
            new google.maps.LatLng(35.205712,-85.928924),
            new google.maps.LatLng(35.205693,-85.928904),
            new google.maps.LatLng(35.205743,-85.928833)],

          new google.maps.LatLng(35.205716, -85.928844),
          "Residential",
          "Dormatory"),


new Building( "McCrady",

          [ new google.maps.LatLng(35.202443,-85.918438),
            new google.maps.LatLng(35.202412,-85.918037),
            new google.maps.LatLng(35.202518,-85.918027),
            new google.maps.LatLng(35.202534,-85.918194),
            new google.maps.LatLng(35.202587,-85.918190),
            new google.maps.LatLng(35.202578,-85.918120),
            new google.maps.LatLng(35.202751,-85.918096),
            new google.maps.LatLng(35.202764,-85.918153),
            new google.maps.LatLng(35.202790,-85.918145),
            new google.maps.LatLng(35.202785,-85.918072),
            new google.maps.LatLng(35.202884,-85.918061),
            new google.maps.LatLng(35.202895,-85.918266),
            new google.maps.LatLng(35.202795,-85.918277),
            new google.maps.LatLng(35.202791,-85.918204),
            new google.maps.LatLng(35.202763,-85.918206),
            new google.maps.LatLng(35.202761,-85.918225),
            new google.maps.LatLng(35.202599,-85.918246),
            new google.maps.LatLng(35.202596,-85.918267),
            new google.maps.LatLng(35.202538,-85.918271),
            new google.maps.LatLng(35.202549,-85.918427),
            new google.maps.LatLng(35.202444,-85.918438)],

          new google.maps.LatLng(35.202684,-85.918171),
          "Residential",
          "Dormatory"),


new Building( "Johnson",

          [ new google.maps.LatLng(35.20649,-85.92076),
            new google.maps.LatLng(35.20656,-85.92100),
            new google.maps.LatLng(35.20663,-85.92097),
            new google.maps.LatLng(35.20661,-85.92093),
            new google.maps.LatLng(35.20676,-85.92085),
            new google.maps.LatLng(35.20675,-85.92082),
            new google.maps.LatLng(35.20679,-85.92079),
            new google.maps.LatLng(35.20676,-85.92069),
            new google.maps.LatLng(35.20657,-85.92078),
            new google.maps.LatLng(35.20655,-85.92073)],


          new google.maps.LatLng(35.206625, -85.920822),
          "Residential",
          "Female Only Dormatory"),


//This one is missing
new Building( "Ayres",

          [new google.maps.LatLng(35.203038, -85.917411)],

          new google.maps.LatLng(35.203038, -85.917411),
          "Residential",
          "Dormatory")


]






