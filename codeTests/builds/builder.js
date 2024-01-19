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
