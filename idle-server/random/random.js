

const names = [
"Retta Rosenbaum",  
"Tayna Thornsberry",  
"Maria Murphey",  
"Annie Andrews",  
"Ilona Ikard",  
"Fidel Fairclough",  
"Adelina Avans",  
"Marvel Marsland",  
"Kanesha Knotts",  
"Malka Masi",  
"Tomoko Trojacek",  
"Chantay Clack",  
"Audie Abdulla",  
"Gladis Graham",  
"Karly Kelch",  
"Lachelle Lazos",  
"Sherlene Saito",  
"Kirk Kittleson",  
"Takisha Tarwater",  
"Kiana Ketcham",  
"Garnet Gusler",  
"Joanie Janas",  
"Carroll Courtney",  
"Mira Mangione",  
"Yolando Yelverton",  
"Camila Cairns",  
"Rana Rezendes",  
"Odilia Ostrem",  
"Michelina Mckiernan",  
"Jacki Jetter",  
"Nora Natoli",  
"Jerome Jumper",  
"Sydney Shiroma",  
"Rosette Rose",  
"Kit Kennington",  
"Maura Moreira",  
"Cristie Corns",  
"Ocie Ohl",  
"Brittany Brackins",  
"Shanta Spielman",  
"Natasha Nevels",  
"Susann Streater",  
"Bessie Burgin",  
"Shawna Stanko",  
"Cherise Chiaramonte",  
"Phung Plewa",  
"Rolando Ransdell",  
"Lucien Liddell",  
"Devora Doney",  
"Cristy Clark",
];



const places = [
"Blackkeep",
"Edgemoor",
"Hollowbridge",
"Westton",
"Byport",
"Merrowmeadow",
"Faybarrow",
"Esterflower",
"Esterbell",
"Deepkeep",
"Corcastle",
"Coldpine",
"Highbeach",
"Shadowsage",
"Windbush",
"Bymist",
"Coldtown",
"Freyfield",
"Crystalkeep",
"Winterhollow",
"Redfall",
"Mistbarrow",
"Crystalice",
"Lochmarsh",
"Butterholt",
"Greenmere",
"Silvermead",
"Wayedge",
"Morlyn",
"Barrowbeach",
"Greyham",
"Bluefalcon",
"Ironbush",
"Northcastle",
"Linview",
"Edgebeach",
"Violetfield",
"Aldborough",
"Woodmill",
"Deermarsh",
"Valden",
"Stonebank",
"Corpond",
"Stonemount",
"Foxmarsh",
"Springgate",
"Freyburn",
"Norhill",
"Springley",
"Fallbridge",
"Snowwald",
"Pryedge",
"Brookland",
];



var randomInstance;

class Random {

  constructor(){
    if(randomInstance == null){
      randomInstance = this;
    }
    return randomInstance;
  }

getWord(list){
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}

getName(){
  return this.getWord(names);
}
getLocation(){
  return this.getWord(places);
}
getOneOf(list){
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}

getInRange(val1, val2){
  let valOut = Math.floor(Math.random() * (val2-val1))+val1;
  return valOut;
}


}

module.exports = new Random();
