let nome = prompt("Digite seu nome completo")
let cpf = Number(prompt("Digite seu CPF"))
let valorSaldo = 2000
let maiorValorInserido = 0; 
let mediaValoresInseridos = 0; 
let continuar = 0;



let opcoes = prompt("Você deseja sacar ou depósitar? (saque/depósito)")

parseInt(prompt("Digite um  valor"))

do { if(opcoes == "saque"){
    - valorSaldo
} else if(opcoes == "depósitos"){
    + valorSaldo
}
    continuar = prompt("Você deseja continuar? (Digite 1 para continuar e 2 para parar).")
} while(continuar == 1);

console.log("Olá " + nome + ", seu saldo total é de " + valorSaldo + ". Na sua conta, o maior valor inserido foi " + maiorValorInserido + " e a média de dos valores inseridos é " + mediaValoresInseridos)








