    
function distanceFromHqInBlocks(someValue) {
 const headquarters = 42;
     return Math.abs(someValue - headquarters);
}

function distanceFromHqInFeet(somevalue) {
    return distanceFromHqInBlocks(somevalue) * 264;
}

function distancetravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function CalculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
 return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <=2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distancetravelledInFeet, // Ensure it's exported 
    CalculatesFarePrice // Ensure it's exported
};