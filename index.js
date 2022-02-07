// Code your solution in this file!

function distanceFromHqInBlocks(pickLoc) {
    const numOfBlocks = Math.abs (pickLoc - 42);
    return numOfBlocks;
};

function distanceFromHqInFeet(pickLoc) {
    const blockFeet = 264;
    const numOfBlocks = Math.abs (pickLoc - 42);
    const blocksFeet = numOfBlocks * blockFeet;
    return blocksFeet;
    
}

function distanceTravelledInFeet(pickLoc,dropLoc) {
    const blockFeet = 264;
    const numOfBlocks = Math.abs (pickLoc - dropLoc);
    const blocksFeet = numOfBlocks * blockFeet;
    return blocksFeet;
}

function calculatesFarePrice(pickLoc,dropLoc) {
    const blockFeet = 264;
    const numOfBlocks = Math.abs (pickLoc - dropLoc);
    const blocksFeet = numOfBlocks * blockFeet;
    const freeFeet = 400;
    const priceInit = 0.02;
    const maxFeet = 2500;
    const flatFeetStart = 2000;
    const priceFlatFee = 25.00;
    let priceFinal;

    if (blocksFeet > maxFeet) {
        return `cannot travel that far`;
    } else if (blocksFeet > flatFeetStart ) { 
        return priceFinal = priceFlatFee;
    } else if (blocksFeet > freeFeet){
        return priceFinal = priceInit * (blocksFeet - freeFeet);
    } else {
        return 0;
    };
        
}
