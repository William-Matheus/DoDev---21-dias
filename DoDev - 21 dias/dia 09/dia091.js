let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = parseFloat(prompt("Digite seu peso"))
let altura = parseFloat(prompt("Digite sua altura"))
let  = profissao = prompt("Digite sua profissão")
let anoNasc;
let anoAtual = 2023
let idadeEmMeses = idade * 12
let idadeEmSemanas = idade * 48
let idadeEmDias = idade * 365

if(idade >= 18) {
    console.log("Vai beber hoje paizão hehehe")
}else {
    console.log("Vai fica na vontade hoje :(")
}

console.log("Olá, " + nome +". Você tem " + idade + ", trabalha como " + profissao + ", tem " + altura + "M e pesa " + peso + "kg")

console.log("sua idade em meses é " + idadeEmMeses + ", sua idade em semanas é " + idadeEmSemanas + " e sua idade  em dias é " + idadeEmDias)