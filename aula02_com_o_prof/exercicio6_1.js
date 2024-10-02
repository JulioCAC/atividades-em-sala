const numeros = []
for (let i = 1; i <= 100; i++){
    numeros.push(i);
}

numeros.map(numero => {
    if(numero % 3 === 0 && numero % 5 === 0){
        console.log(`${numero} FizzBuzz`);
    } else if(numero % 3 === 0){
        console.log(`${numero} Fizz`);
    } else if(numero % 5 === 0){
        console.log(`${numero} Buzz`);
    } else {
        console.log(numero);
    }
});