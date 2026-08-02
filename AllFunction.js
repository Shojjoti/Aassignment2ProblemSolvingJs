//PROBLEM 1
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

//PROBLEM 2
function isElevatorSafe(weights) {

    if(!Array.isArray(weights)) {
        return "Invalid";
    }

    let totalWeight = 0;
    for(let i =0; i < weights.length; i++) {
        totalWeight += weights[i];
    }
    return totalWeight <= 400;
  
}

//PROBLEM 3


