
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var stored= "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
  return stored
}

function nowServing(entry){
  if(entry.length>0){
    var stored2= "Currently serving "+entry.shift()+"."
    return stored2
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
<<<<<<< HEAD
  if(array.length === 0){
    var msg ="The line is currently empty.";
    return msg
=======
  if(array === 0){
    var msg ="The line is currently empty."
    console.log(msg)
>>>>>>> c788a747a0cad31084611d51549ed154c865a334
  }else{
    for (let i = 0; i<array.length; i++){
      array[i] = " "+(i+1)+". "+array[i];
    }
    var stored3 = "The line is currently:"+array
<<<<<<< HEAD
    return stored3
=======
    console.log(stored3)
>>>>>>> c788a747a0cad31084611d51549ed154c865a334
  }
}