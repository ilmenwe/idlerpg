const Character = require('../character/Character');
const Gravestones = require('../object/prop/Gravestones');
const Random = require('../random/random');
const Persistable = require('../store/persistable');

module.exports = class Location extends Persistable
{
  initData(){
    this.characters = [];
    this.charactersInTransit = [];
    this.possibleActions = [];
    this.objects = [];
  }
  constructor(id){
    super(id);
    if(id == 'undefined' || id == null)
    {
      this.initData();
      this.data.name = Random.getLocation();
      this.data.description = "This location have no description yet";
    }
  }
  getObjects(){
    return this.objects;
  }

  load(id){
    this.initData();
    console.log(id);
    super.load(id);
    for(let i in this.data.characterId){
      let characterId  = this.data.characterId[i];
      console.log(this);
      let character = new Character(characterId);
      this.Enter(character);
    }
  }

  save(){
    this.data.characterId = [];
    for(let i in this.characters)
    {
      let character = this.characters[i];
      console.log("saving character id:" + character.getId());
      this.data.characterId.push(character.save());
    }
    return super.save();
  }

  removeObject(object){
    if(object.getName() == 'Gravestone'){
        if(this.gravestones == null){
          this.gravestones.remove(object);
          return;
        }
      }

  }

  addObject(object){
    let objectToAdd = object;
    if(object.getName() == 'Gravestone'){
      if(this.gravestones == null){
        this.gravestones = new Gravestones(object);
        objectToAdd = this.gravestones;
      }
      else
      {
        this.gravestones.add(object);
        return;
      }
    }
    this.objects.push(objectToAdd);

  }

  Description(){
    return this.data.description;
  }
  Enter(character){
    console.log(character.getName() + ' has entered ' + this.getName());
    character.setLocation(this);
    this.charactersInTransit.push(character)
  }
  Exit(character){
    character.setLocation(null);
    var i = this.characters.indexOf(character);
    if(i != -1) {
    	this.characters.splice(i, 1);
    }
    console.log(character.getName() + ' has left ' + this.getName());
  }
  Update(){
  console.log('Updating Location: ' + this.getName());
    for(let i in this.characters){

      this.characters[i].Update();
    }
  }
  UpdateTransits(){
    for(let i in this.charactersInTransit){
      this.characters.push(this.charactersInTransit[i]);
    }
    this.charactersInTransit = [];
  }
};
