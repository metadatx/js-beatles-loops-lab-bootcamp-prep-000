function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i=0, mscsLen=musicians.length; i < mscsLen; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
 var i=0
 var factsLen = facts.length
 while(i < factsLen){
   facts[i] = facts[i].concat("!!!")
   i++
 }
 return facts
}

function iLoveTheBeatles(num){
  var arr = []
  var cloneNum = num
  do{
    arr.push("I love the Beatles!")
    num++
  }while(num < 15);
  
  if(cloneNum > 14){  
    arr.push("I love the Beatles!")
    return arr
  }
  else return arr
}