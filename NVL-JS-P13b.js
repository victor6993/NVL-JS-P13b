console.log(palindromo("Adan y eva ave y nada"));

function palindromo(input) {
    inputLower = input.toLowerCase();

    for(let i = 0; i < inputLower.length;i++) {
        if(inputLower[i] !== inputLower[inputLower.length-i-1]) {
            return input + " NOOO es palíndromo";
        }
    }
    return input + " SIII es palídromo"
}