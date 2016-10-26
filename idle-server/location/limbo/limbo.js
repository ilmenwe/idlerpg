const Location = require('../location')
const Gateway = require('../../object/transport/gateway')

var limboInstance;

module.exports = class Limbo extends Location
{
  constructor(){
    super();
    if(limboInstance == null){
      limboInstance = this;
    }
    return limboInstance;
  }

}


