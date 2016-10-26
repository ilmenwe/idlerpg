const CharacterStorage = require('node-storage');
const Character = require('./Character')
var characterStorageInstance;

module.exports = class Characters{

  constructor(){
    if(characterStorageInstance == null)
    {
      this.super();
      this.storage = new Storage('Characters.json');
      characterStorageInstance = this;
    }
    return characterStorageInstance;
  }
  CreateNewCharacter(user){
    this.storage.set(user, new Character);
  }
  getUserCharacter(user){
    this.storage.get(user);

  }

}
