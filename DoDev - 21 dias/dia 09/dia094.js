// // PERDINDO INFORMAÇÕES PARA O CLIENTE
// let confirmar = "Não"

// while (confirmar !== "Sim") {
// let nome = prompt("Digite seu nome") 
// let idade = parseInt(prompt("Digite sua idade"))
// let salarioAtual = parseFloat(prompt("Digite seu salário atual"))
// }
// console.log("Olá, " + nome + ". Você tem " + idade + " de idade e seu salário atual é " + salarioAtual.toFixed(2))

// confirmar = prompt("As informações que você inseriu estão corretas? (Sim/Não)")


// let aumento = 0.015 
// console.log("Seu aumento salarial nos proximos 10 anos:")

// for (let ano = 1; ano <= 10; ano++) {
//     salarioAtual += salarioAtual * aumento 
//     aumento *= 2

// console.log((2023 + ano) + " em R$ " + salarioAtual)
// }


let continuar = "Não"
while (continuar != "Sim") {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = parseFloat(prompt("Digite salártio atual"))
    console.log("Olá, " + nome + ". Você tem " + idade + " de idade, e seu salário atual é: " + salarioAtual)
    continuar = prompt("As informações que você forneceu estão corretas? Sim/Não")
}

let aumentoSalario = 0.015
console.log("A previsão salarial de " + nome + " para os próxiumos 10 anos é de:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumentoSalario; aumentoSalario ** 2

    console.log((2023 + ano) + " em R$ " + salarioAtual)
}