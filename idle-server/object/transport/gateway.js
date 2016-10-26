const Transport = require('./transport')

module.exports = class Gateway extends Transport{
  constructor(destinationLocation){
      super(destinationLocation);
      this.setName('a Gateway');
      this.setDescription('It\'s liquid surface, shinmmers slightly. ' + this.description);
    }


}
