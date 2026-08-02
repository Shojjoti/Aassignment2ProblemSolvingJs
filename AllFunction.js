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
function calculateAiCost(tokenUsed){
    if(typeof tokenUsed !== 'number' || tokenUsed < 0 || isNaN(tokenUsed)) {
        return "Invalid";
    }

    if(tokenUsed <= 500) {
        return 0;
    }
    let extraTokens = tokenUsed - 500;
    let totalCost = 0;
    
   while (extraTokens >= 100) {
        totalCost = totalCost + 5;
        extraTokens = extraTokens - 100;
    }   

    return totalCost;    
}

//PROBLEM 4


