function randomInteger(min, max) {
    return Math.random() * (max - min + 1) | 0;
}

function createRandomNumbersArray(length, min, max) {
    const randomNumbers = [];
    
    for (let i = 0; i < length; i++ ) {
        randomNumbers.push(randomInteger(min, max));
    }

    return console.log(randomNumbers);
}

createRandomNumbersArray(200, 1, 1000);
