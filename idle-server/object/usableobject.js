const Persistable = require('../store/persistable');

module.exports = class UsableObject extends Persistable{
  constructor(destinationLocation){
     super();
     this.data.name = "got no name";
     this.data.usage = "the use is not defined";
     this.data.description = "the object got no description";
  }

  Description(){
    return this.description;
  }

  Usage(){
    return this.usage;
  }


  setDescription(description){
    this.description = description;
  }

  setUsage(usage) {
    this.usage = usage;
  }

  Use(character){
    console.log(character.Name() + ' tried to use ' + this.getName() + ' to ' + this.Usage());
    return true;
  }


}
