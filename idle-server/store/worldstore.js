var Storage = require('node-storage');

let worldStoreinstance = null;

class WorldStore{
  constructor() {
    if(!worldStoreinstance){
      worldStoreinstance = this;
      this.storage = new Storage('./persistance/WorldStore.json');
    }
    return worldStoreinstance;
  }
  get(){
    return this.storage.get('world');
  }
  set(world){
    this.storage.put('world',world);
  }
}

module.exports = new WorldStore();
