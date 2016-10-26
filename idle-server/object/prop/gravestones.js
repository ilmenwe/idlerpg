const UsableObject = require('../usableobject')
const Random = require('../../random/random')

module.exports = class Gravestones extends UsableObject{
  constructor(gravestone,location){
    super();

    this.stones= [];
    this.location = location;
    this.stones.push(gravestone)
    this.setUsage('Mourn the fallen' );
    this.setDescription('');
    this.data.name = 'Gravestone';

  }

  remove(gravestone){
    var index = this.stones.indexOf(gravestone);
    this.stones.spline(index,1);
    if(this.stones.length == 0){
      this.location.removeObject(this);
    }
  }

  add(gravestone){
    this.stones.push(gravestone);
    console.log('added gravestone');
    if(this.stones.length > 1){
          this.data.name = 'Gravestones';
      this.setDescription('a few gravestones');
    }
    else if(this.stones.length > 6){
          this.data.name = 'Cemetery';
      this.setDescription('a cemetery');
    }
  }

  Use(character){
    if(this.stones.length == 1){
      console.log('You aproach the gravestone.');
      let stone = this.stones[0];
      stone.Use(character);
      return;
    } else if(this.stones.length > 1){
      console.log('You look at the diffrent gravestones.');
      let stone = Random.getOneOf(this.stones);
      stone.Use(character);
      return;
    }
     else if(this.stones.length > 6){
      console.log('You strole trough the cemetery.');
      let stone = Random.getOneOf(this.stones);
      stone.Use(character);
      return;
    }

  }
}
