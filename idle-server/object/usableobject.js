

module.exports = class UsableObject{
  constructor(destinationLocation){
     this.name = "got no name";
     this.usage = "the use is not defined";
     this.description = "the object got no description";
  }

  Description(){
    return this.description;
  }

  Usage(){
    return this.usage;
  }

  Name(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  setDescription(description){
    this.description = description;
  }

  setUsage(usage) {
    this.usage = usage;
  }

  Use(character){
    console.log(character.Name() + ' tried to use ' + this.Name() + ' to ' + this.Usage());
    return true;
  }


}
