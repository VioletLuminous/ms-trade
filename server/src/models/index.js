
// fireData.ref('msdata').once('value', function(snapshot){
//   console.log(snapshot.toJSON())
// })

// {
//   "equipName":"頂級培羅德腰帶",
//   "parts":頭,
//   "star":0,
//   "reel":0,
//   "plus": [0,0,0,0,0,0,0,0],
//   "Flame":[0,0,0,0,0,0,0,0],
//   "per":["REUL",{"str%":12},{"str%":12},{"str%":12}],
//   "stu":[ "REUL", {"str%":7}, {"str%":5}, {"all%":4}]
//   "postTime" : Date.now()
// }

class equip{
  constructor(name, parts, star = 0, reel = 0, plus = [0,0,0,0,0,0,0,0], flame = [0,0,0,0,0,0,0,0], per = ["R",{},{},{}], stu = ["R",{},{},{}]){
    this.equipName = name;
    this.parts = parts;
    this.star = star;
    this.reel = reel;
    this.plus = plus;
    this.flame = flame;
    this.per = per;
    this.stu = stu;
    this.postTime = Date.now()
  }
  toJSON(){
    var equJson = {
      "equipName":this.equipName,
      "parts":this.parts,
      "star" : this.star,
      "reel" : this.reel,
      "plus" : this.plus,
      "flame" : this.flame,
      "per" : this.per,
      "stu" : this.stu,
      "postTime" : this.postTime
    }
    // console.log(JSON.stringify(equJson))
    return equJson
  }
}