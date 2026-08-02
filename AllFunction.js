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
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants)|| restaurants.length === 0 ) {
        return "Invalid";
    }

    let higRating = restaurants[0].rating;
    let topResturant = restaurants[0].name;

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > higRating) {
            higRating = restaurants[i].rating;
            topResturant = restaurants[i].name;
        }
    }

    return topResturant.toUpperCase();
}

//PROBLEM 5

function averageResponseTime(times) {
  if (Array.isArray(times) === false){    
    return "Invalid";
  }
   
  if (times.length === 0) {
      return "Invalid";
  }

  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number" || isNaN(times[i])) {
    return "Invalid";
    }
  }
   
  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total = total + times[i];
  }
  
  return total / times.length; 
}

