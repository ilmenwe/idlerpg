const UsableObject = require('../usableobject')


module.exports = class Transport extends UsableObject{
  constructor(destinationLocation){
    super();
    this.destinationLocation = destinationLocation;
    this.setUsage('Go to ' + destinationLocation.Name() + "." );
    this.setDescription('It\'s a passage that appears to go to ' + destinationLocation.Name());

  }

    Use(character){
      super.Use(character);
      this.Enter(character);
    }

  Enter(character){
    if(this.destinationLocation != null && this.destinationLocation != 'undefined'){
      character.EnterNewLocation(this.destinationLocation);
    }
  }

}
