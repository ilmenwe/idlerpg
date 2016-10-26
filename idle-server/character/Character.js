const Random = require('../random/random');
const Stats = require('../stats/stats')
const GraveStone = require('../object/prop/gravestone');
const Persistable = require('../store/persistable');
const IdStore = require('../store/idstore');
module.exports = class Character extends Persistable {
  constructor(){
    super();
    this.data.state = 'alive';
    this.stats = new Stats();
    this.data.name = Random.getName();
    this.data.location = null;
    this.data.lifeLength = 0;
    this.stats.set('energy',3);

  }

  save(){
    if(this.location){
      this.data.location = this.location.getId();
    }
  }

  load(id) {
    super.load(id);
  }

  setLocation(location ){
    this.location = location
  }
  getLocation(){
    return this.location;
  }


  getStats(){
    return this.stats;
  }

  isHungry(){
    return 10-this.stats.get('energy');
  }

  getState(){
    return this.data.state;
  }

  Output(){
    console.log('Updating '+ this.Name() + JSON.stringify(this.stats.getStats()));
    let hunger = this.isHungry();
    console.log('Hunger: ' + hunger);

    console.log(this.Name() + ' is ' + this.getState());

    if(this.getState() == 'alive'){
    console.log(this.location);
      if(this.location != null)
      {
        console.log('   '+ this.Name() + ' is in ' + this.location.Name());
      }
      let locationObjs = this.location.getObjects();
      if(locationObjs != null)
      {
        for(let i = 0; i < locationObjs.length; i++){
          let currentObj = locationObjs[i];
          console.log('      ' + this.Name() + ' see ' + currentObj.Name() + '. ' + currentObj.Description());
        }
      }
    }
  }

  Update(){
    if(this.getState() == 'alive'){
      this.Output();
      let locationObjs = this.location.getObjects();
      if(locationObjs.length){
        let obj = Random.getOneOf(locationObjs);
        obj.Use(this);
      } else {
        console.info("No Objects to interact with in: " + this.location.getName());
      }
      if(this.stats.get('energy') <= 0) {
        console.log( this.Name() + ' ran out of energy and died of hunger');
        this.data.state = 'dead';
        let gravestone = new GraveStone(this);
        this.location.addObject(gravestone);
        let character = new Character();
        console.log('\n' + character.Name() + ' assembles from the ashes');
        this.location.Enter(character)
      }
      this.data.lifeLength++;
      this.stats.decrease('energy',1);
    }

  }

  LeaveCurrentLocation(){
    this.location.Exit(this);
  }
  EnterNewLocation(location){
    if(location != null && location != 'undefined'){
      this.LeaveCurrentLocation();
      location.Enter(this);
    }
  }
}
