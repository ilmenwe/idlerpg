const UsableObject = require('../usableobject');
const Random = require('../../random/random');



module.exports = class Gravestone extends UsableObject{
  constructor(character){
    super();

    this.setUsage('Mourn the fallen' );
    this.setDescription('It\'s a grave stone to ' + character.getName()+ ' who lived for ' + character.lifeLength + ' updates');
    this.data.name = 'Gravestone';
    this.location = character.getLocation();
    this.occupantName = character.getName();

  }

  getOccupantName(){ return this.occupantName;}

  Use(character){

    let hunger = character.isHungry();


    if( ( hunger <5)) {
     console.log('You pay your respect at ' + this.getOccupantName() + '\s gravestone');
    }
    else if( (hunger>5 && hunger <7)){
      console.log('You stomach growl but you fight the urge to dig. You leave ' + this.getOccupantName() + '\s grave behind in haste.');
    }
    else if(hunger>7)
    {
      console.log('You stomach growl and you fight the urge to dig. But fail.');


      let energy = Random.getInRange(1,3);
      let effect = Random.getInRange(0,3);
      switch(effect) {

        case 0:
          console.log(' The hunger won\'t let you stop, but all you find in ' + this.getOccupantName() + '\s grave is dirt and rocks, eventually you collapse from exhaustion.');
          character.getStats().decrease('energy',energy);
          break;

        case 1:
          console.log('You rip trough the earth of ' + this.getOccupantName() + '\s grave and start to consume what ever scraps you find.');
          character.getStats().increase('energy',energy);
          break;

        case 2:
          console.log('Standing in front of' + this.getOccupantName() + 's grave, your brain disconnects, in your mind you re-live a great feast, far removed from the horrors of reality. When you return to yourself, your nails are broken and you are far from the grave. But you feel quite full and content.');
          character.getStats().increase('energy',(energy)*3);
          this.location.removeObject(this);
          break;
      }
    }

  }
}


