function randomInteger(min, max) {
    return Math.random() * (max - min + 1) | 0;
}

function createRandomNumbersArray(length, min, max) {
    const randomNumbers = [];
    
    for (let i = 0; i < length; i++ ) {
        randomNumbers.push(randomInteger(min, max));
    }

    return randomNumbers;
}

var randomArray = createRandomNumbersArray(200, 1, 1000);

function calculateArrayMedia(ar) {
    var soma = ar.reduce((lastNum, num) => lastNum + num, 0);

    var media = soma / ar.length;

    return media;
}

console.log(calculateArrayMedia(randomArray));

