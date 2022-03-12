function compareModule() {
    this.media = function(cArray) {
        var somaArray = cArray.reduce((a, b) => a + b, 0),
            mediaArray = somaArray / cArray.length;

        return mediaArray;
    }

    this.menor = function(cArray) {
        var minValue = Math.min.apply(Math, cArray);
        return minValue;
    }
    
    this.maior = function(cArray) {
        var maxValue = Math.max.apply(Math, cArray);
        return maxValue;
    }
}

module.exports = compareModule;