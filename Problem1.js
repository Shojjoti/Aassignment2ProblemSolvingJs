function matchWinner(teamAGoals, teamBGoals) {

  if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') {
    return "Invalid";
  }  

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  }
  else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  }
  else if (teamAGoals === teamBGoals) {
    return "Draw";
  }  
  else if (teamAGoals < 0 || teamBGoals < 0) {
    return "Invalid";
  } 
}

console.log(matchWinner(2, 1));   
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));   
console.log(matchWinner("3", 2));
console.log(matchWinner(NaN, 2)); 
console.log(matchWinner(true, 2)); 
