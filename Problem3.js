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

console.log(calculateAiCost(300));   
console.log(calculateAiCost(500));  
console.log(calculateAiCost(650));   
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10)); 