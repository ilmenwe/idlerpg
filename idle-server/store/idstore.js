var Storage = require('node-storage');
const Guid = require('guid');

let idStoreinstance = null;

class IdStore{
  constructor() {
    if(!idStoreinstance){
      idStoreinstance = this;
      this.storage = new Storage('./persistance/IdStore.json');
      this.memStorage = {};
    }
    return idStoreinstance;
  }
  get(id){
    let data = this.memStorage[id];
    if(!data)
    {
      data = this.storage.get(id);
    }
    return data;
  }
  put(object){
    this.storage.put(object.getId(),object.data);
    this.memStorage[object.getId(),object.data];
    return object.getId();
  }
}

module.exports = new IdStore();
