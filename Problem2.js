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

console.log(isElevatorSafe([60, 75, 50])); 
console.log(isElevatorSafe([90, 100, 95, 120]));  
console.log(isElevatorSafe([400])); 
console.log(isElevatorSafe("60,75,50"));  

