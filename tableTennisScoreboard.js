var player1 = 0
var player2 = 0

while (score != null || score != '' || isNaN(score)){
 var score = prompt('Who scored?')
 //adds a point to either player-1 or player-2 respectively 
if (score == 1){
    player1++
}if (score == 2){
    player2++
}
 //breaks if the user enters an invalid character
 if (score == null || score == '' || isNaN(score)){
  break;
}
//breaks when a player wins
if(player1 >= 11 && player1 - player2 >= 2){
  break;
}if (player2 >= 11 && player2 - player1 >= 2){
  break;
}
}
//states the scores
alert('Player 1: ' + player1 + '\nPlayer 2: ' + player2)
