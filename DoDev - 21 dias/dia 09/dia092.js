// CALCULO DE IMC
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = parseFloat(prompt("Digite seu peso"))
let altura = parseFloat(prompt("Digite sua altura"))

let anoNasc = idade - 2023
let imc = peso / (altura ** 2)

// O peso deve estar em KG e altura em metros (M) e o resultado deve ser em kg/m2

if (imc < 18.5) {
    console.log("Magreza")
}else if (imc >= 24.9) {
    console.log("Normal")
}else if (imc = 30) {
    console.log("Sobrepeso") 
}else if (imc >= 30) {
    console.log("Obesidade")
}
console.log("Olá, " + nome + ". Você tem " + idade + " anos de idade, nasceu em " + anoNasc + ", você tem" + altura + " e seu IMC é " + imc.toFixed(2))

let anoDeVivencia = anoNasc
let idadeAtualmente = 0; 
let desejaContinuar = "Sim"

for (anoDeVivencia = anoNasc; anoDeVivencia <= anoNasc + idade; anoDeVivencia++) {
    console.log(anoDeVivencia + " - " + anoNasc + " = " + idadeAtualmente + " anos de idade")
    idadeAtualmente++
}

do {
    dejesaContinuar = prompt("Dejsa continuar adicionando novos dados? (Sim/Não)")
} while (desejaContinuar.toLowerCase() === "Sim")