const CharacterStore = require('node-storage');

let userStorageinstance = null;

module.exports = class UserStorage{
  constructor() {
    if(!userStorageinstance){
      userStorageinstance = this;
      this.userStorage = new Storage('./persistance/CharacterStorage.json');
    }
    return userStorageinstance;
  }
  getUserCharacters(user){
    return this.userStorage.getItem(user);
  }
  saveUserCharacters(user,character){
    return this.userStorage.setItem(user,character);
  }
}


