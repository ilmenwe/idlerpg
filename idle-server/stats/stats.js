


module.exports = class Stats{

  constructor(){
    this.stat =  new Object();
    this.stat['strength'];
    this.stat['energy'];
    this.stat['damage'];
    this.stat['money'];
    this.stat['knowledge'];
  }


  CreateNewCharacter(user){
    this.storage.set(user, new Character);
  }

  set(name,val)
  {
    if(this.stat[name] == 'undefined'){
      this.stat[name] = 0;
    }
    this.stat[name] = val;
  }

  get(name){
    if(this.stat[name] == 'undefined'){
      this.stat[name] = 0;
    }
    return this.stat[name];

  }
  increase(name, value){
    if(this.stat[name] == 'undefined'){
      this.stat[name] = value;
    }else {
      this.stat[name] +=value;
    }

  }
  decrease(name,value){
    if(this.stat[name] == 'undefined'){
        this.stat[name] = -value;
    }else {
      this.stat[name] -=value;
    }
  }
  getStats(){
    return this.stat;
  }
}
