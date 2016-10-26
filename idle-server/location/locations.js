let Location = require('./location');
let Limbo = require('./limbo/limbo');
const Characters = require('../character/characters')
const Character = require('../character/character');
const Gateway = require('../object/transport/gateway');
const WorldStore = require('../store/WorldStore')
var locationsInstance;

module.exports = class Locations {

  constructor() {
    this.data = {};
    if(locationsInstance == null) {
      locationsInstance = this;
      this.locations = [];
      this.width = 5;
      this.height = 5;

      let loadedLocations = WorldStore.get();

      if( loadedLocations == null || loadedLocations == {})
      {
        this.generateWorld();
        this.save();
      }
      else
      {
       this.load();
      }

    }
    return this;
  }

  save(){
    this.data.locations = [];
    for(let i in this.locations){
      var location = this.locations[i];
      this.data.locations.push(location.save());
    }
    WorldStore.set(this.data);
  }

  load()
  {
    let world = WorldStore.get();
    for(let i in world.locations ){
      let locationID = world.locations[i];
      this.locations.push(new Location(locationID));
    }
  }

  generateWorld(){
      console.log('World created!!!!');
      let location = new Location();
      let location2 = new Location();
      let limbo = new Limbo();

      this.locations.push(location);
      this.locations.push(location2);
      this.locations.push(limbo);

      let gatewayFromLocationToLimbo = new Gateway(limbo);
      location.addObject(gatewayFromLocationToLimbo);

      let gatewayFromLocation2ToLimbo = new Gateway(limbo);
      location2.addObject(gatewayFromLocation2ToLimbo);


      let gatewayFromLimboToLocation = new Gateway(location);
      limbo.addObject(gatewayFromLimboToLocation);

      let gatewayFromLimboToLocation2 = new Gateway(location2);
      limbo.addObject(gatewayFromLimboToLocation2);


      let character = new Character();

      limbo.Enter(character);

  }


  UpdateTransits(){
    for(let i = 0; i < this.locations.length; i++){
      this.locations[i].UpdateTransits();
    }
  }


  Update() {
  console.log('NrLocations: ' + this.locations.length);
    for(let i = 0; i < this.locations.length; i++){
      this.locations[i].Update();
    }
  }


}
