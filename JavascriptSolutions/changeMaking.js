
function makeChange(targetAmount){
    // list money amounts that can be used
    let money = [200, 100, 50, 20, 10, 5, 2, 1];
    // start a count for how many coins
    let coinCount = 0;
    //make an arrary to hold the coins used
    let values = [];
    //iterate through the money possibilities 
    for (coin of money){
        //Use current coin until value is too large
        while (targetAmount >= coin){
            // Decrease the remaining amount
            targetAmount -= coin
            //push the coins used into the values array
            values.push(coin)
            //Increae the count 
            coinCount += 1
        }
    }
    // return the count and the values array 
    return coinCount, values
}