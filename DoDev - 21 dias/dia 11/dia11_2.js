let modeloArr = [];
let anoArr = [];
let valorArr = [];

let item = 0;
let pergunta = true
while (pergunta) {
    let modelo = prompt(`Digite o modelo do ${pergunta + 1}º carro:`);
    modeloArr[item] = modelo;
    let ano = prompt("Digite o ano do carro:");
    anoArr[item] = ano;
    let valor = prompt("Digite o valor do carro:");
    valorArr[item] = valor;
    item++;

    let resultado = prompt("Deseja continuar inserindo dados? sim/nao");
    if (resultado !== "sim") {
        pergunta = false
    }
}

console.log("Os modelos escolhido:");
for (let a =0; a < modeloArr.length; a++) {
    console.log(`Modelo: ${modeloArr[a]}, Ano: ${anoArr[a]}, Valor: ${valorArr[a]}`)
}

for (let c = 0; c < valorArr.length - 1; c++) {
    for (let d = 0; d < valorArr.length - c - 1; d++) {
        if (valorArr[d] > valorArr[d + 1]) {
            let mdoeloDeMaiorValor = modeloArr[d]
            modeloArr[d] = modeloArr[d + 1]
            modeloArr[d + 1] = mdoeloDeMaiorValor

            let anoDeMaiorValor = anoArr[d]
            anoArr[d] =  anoArr[d + 1]
            anoArr[d + 1] = anoDeMaiorValor
            
            let maiorDeMaiorValor = valorArr[d]
            valorArr[d] = valorArr[d + 1]
            valorArr[d + 1] = maiorDeMaiorValor
        }
    }
}

console.log("Os carros escolhidos ordenados pelo preço:")
for (let e = 0; e < modeloArr.length; e++) {
    console.log(`${modeloArr[e]}, ${anoArr[e]}, ${valorArr[e]}`)
}