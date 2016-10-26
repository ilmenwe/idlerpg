var Storage = require('node-storage');

let userStorageinstance = null;

module.exports = class UserStorage{
  constructor() {
    if(!userStorageinstance){
      userStorageinstance = this;
      this.userStorage = new Storage('./persistance/UserStorage.json');
    }


    return userStorageinstance;
  }
  getUserCharacters(user){
    return this.userStorage.getItem(user);
  }
}


