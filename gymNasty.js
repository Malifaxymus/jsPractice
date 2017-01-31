var difS = 0

for(var i = 1; i <= 2; i++){
var difJ = prompt('what was the score from difficulty judge ' + i)
  
  //alerts the user if they inserted a number too high, and sets the loop back one step
  if (difJ > 8){
    alert('too high')
    i -= 1
  }
  
  //adds to score if it is within th boundries
  if (difJ <= 8 && difJ >= 0){
    difS = Number(difS) + Number(difJ)
  }
}

//calculates average score for difficulty
var difA = Number(difS) / (i - 1)




var execJ_low = 10
var execJ_high = 0
var execS = 0

for (var n = 1; n <= 5; n++){
  
var execJ = prompt('what was the score from execution judge ' + n)
  if (isNaN(execJ)){
    break;
  }

   //alerts the user if they inserted a number too high, and sets the loop back one step
  if (execJ > 10){
   alert('too high')
    n -= 1 
  }
  
  execJ = Number(execJ);
  //saves the highest and lowest scores in seperate variables
  if (execJ > execJ_high){
    execJ_high = execJ
  }if (execJ < execJ_low){
    execJ_low = execJ
  }
  
  //adds to score if it is within th boundries
  if (execJ <= 10 && execJ >= 0){
    execS = execS + execJ
  }
}
//calculates average score for execution
var execA = (execS - (Number(execJ_high) + Number(execJ_low))) / (n - 3)




  if (n >= 5){
alert('The final score is ' + (Number(execA) + Number(difA)))
}
