const GUID = require ('guid');
const IdStore = require('../store/idstore');
module.exports = class Persistable{
  constructor(id){
    if(id == null || id == 'undefined'){
      this.data = {}
      this.id = GUID.create().value;
      this.name = "unnamed";
      this.data.type = "unknownType";
    } else {
      this.load(id);

    }

  }

  getType(){
    console.error("Data Type not set for object");
    return  this.type;
  }

  getName(){return this.data.name;}
  getId(){return this.id;}
  save(){
      return IdStore.put(this);
    }
  load(id){
    this.data = IdStore.get(id);
    this.id = id;
  }

  getParam(name){
    return this.data[name];
  }
  setParam(name, val){
    this.data[name] = val;
  }

}
