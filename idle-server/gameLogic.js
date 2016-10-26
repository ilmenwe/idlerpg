const UserStorage = require('./store/UserStore');
const Colors = require("colors");

const Locations = require('./location/locations');
const WorldStore = require('./store/worldstore')



module.exports = class GameLogic
{
  constructor(server) {
    this.io = require('socket.io')(server);
    this.desiredFrameLength= 4000;
    this.currentServerTick= 0;
    this.locations = new Locations();
    this.io.on('connection', this.incomingConnection);
    this.io.on('id',this.handleId);
  }

  handleId(id){

  }

  incomingConnection(socket){
    socket.emit('connection', 'requestId');
  }


  getDateTime() {
    var now     = new Date();
    var year    = now.getFullYear();
    var month   = now.getMonth()+1;
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
    if(month.toString().length == 1) {
      var month = '0'+month;
    }
    if(day.toString().length == 1) {
      var day = '0'+day;
    }
    if(hour.toString().length == 1) {
      var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
      var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
      var second = '0'+second;
    }
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
    return dateTime;
  }


  gameLogicUpdate(delta)
  {

    console.log(Colors.rainbow(this.getDateTime() + ' Server Update ') + ' (currentServerTick=%s, delta=%s)', this.currentServerTick++, delta);
    this.locations.Update();
    this.locations.UpdateTransits();
    this.locations.save();

  }
  getDesiredFrameLength() {
    return this.desiredFrameLength;
  }


};
