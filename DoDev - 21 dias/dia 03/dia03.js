// CONHECENDO O USUÁRIO (IMC) - 21 DIAS DODEV

// Usando as variáveis let e prompt para pedir informações ao usuário
let idade = parseInt(prompt("Digite sua idade:")) // parseInt para pedri um valor inteiro (idade)

let altura = parseFloat(prompt("Digite sua altura:")) // parseFloat para pedir um valor com valores com casas décimais

let peso = parseFloat(prompt("Digite seu peso:")) // parseFloat para pedir um valor com valores com casas décimais

let anoNasc = idade - 2023 // variável anoNasc para o ano de nascimento do usuário

imc = peso / (altura * altura)
let format = imc.toFixed(2) // toFixed serve para formatar o valor no console.

console.log("Seu peso é " + format) // console.log() para exibir na tela



