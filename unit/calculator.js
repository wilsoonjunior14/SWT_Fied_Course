// calculator object
var calculator = {

    // method used for calculate the sum amoung two numbers
    sum: (a, b) => {
        return a + b
    },

    // method used for calculate the difference amoung two numbers
    diff: (a, b) => {
        return a - b;
    },

    // method used for calculate the multiply of a number
    multiply: (a, b) => {
        return a * b;
    },

    // method used for calculate square root of number
    sqrt: (a) => {
        return Math.sqrt(a);
    }

    // TODO: implement the division method for two numbers

}

module.exports = calculator