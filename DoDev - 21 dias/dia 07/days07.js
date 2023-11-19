let nome = prompt("Digite seu nome");
let cpf = prompt("Digite seu cpf")
let saldo = 100;
let operacao = Number(prompt("Digite 1 para saque e 2 para depósito"))
let maiorValorInserido = 0;
let valotTotalInserido = 0;

while(continuar){
    let textoSolicitarValor = "Digite o valor que deseja"
textoSolicitarValor += operacao == 1 ? "Depositar" : "sacar"

let valorInserido = Number(prompt(textoSolicitarValor)) 
maiorValorInserido = valorInserido

if(operacao == 1) {
    saldo = saldo - valorInserido

}else if(operacao == 2){
    if(saldo - valorInserido < 0) {
        console.log("Saldo insuficiente"
        )
    }else{
        saldo -= valorInserido
    }
    saldo -= valorInserido

}else{
    console.log("Operação invalida")

    let desejacontinuar = prompt("Digite 1 para continuar")
    if(desejacontinuar != "1")
    continuar = false;
    }
}
console.log("Maior valor inserido" + maiorValorInserido)

// SUGESTÃO DE USAR O SWICH CASE

// let continuar = true;
// let nome = prompt('Insira seu nome');
// let cpf = prompt('Insira seu cpf');
// let saldo = 100;
// let maiorValorInserido = 0;
// let valorTotalInserido = 0;
// let quantidadeDeValoresInseridos = 0;


// while(continuar){
//     console.log("Valor do seu saldo é de: " + saldo);

//     let operacao = Number(prompt('Insira 1 para depósito e 2 para saque'));
//     let textoSolicitarValor = 'Insira o valor que você deseja '
//     textoSolicitarValor += operacao == 1 ? "depositar" : "sacar"
    
//     let valorInserido = Number(prompt(textoSolicitarValor))
//     if(valorInserido < 0){
//         console.log('Não são permitidos valores negativos');
//         continue;
//     }

//     valorTotalInserido += valorInserido;
//     quantidadeDeValoresInseridos++;

//     if(valorInserido > maiorValorInserido){
//         maiorValorInserido = valorInserido
//     }

//     if(operacao == 1){
//         saldo = saldo + valorInserido
//     }else if(operacao == 2){
//         if(saldo - valorInserido < 0 )
//         {
//             console.log("Saldo insuficiente")

//         }else{
//             saldo -= valorInserido
//         }
//     }else{
//         console.log('Operação invalida')
//     }

//     let desejaContinuar = prompt('Digite 1 para continuar')
//     if(desejaContinuar != '1'){
//         continuar = false;
//     }

// }

// console.log("Média dos valores inseridos: " + valorTotalInserido / quantidadeDeValoresInseridos)
// console.log("Maior valor inserido: " + maiorValorInserido)