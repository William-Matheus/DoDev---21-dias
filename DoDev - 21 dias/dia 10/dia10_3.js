let numero = parseInt(prompt("Digite um número"));
let sequencia = []

sequencia[0] = 0;
sequencia[1] = 1; 

for (let a = 2; a <= numero; a++) {
    sequencia[a] = sequencia[a - 1] + sequencia[a - 2];
}
let resultadoFibo = sequencia[numero]

console.log(`O resultado do ${numero}º numero da squência de Fibonacci é ${resultadoFibo}`);