// CONDICIONAIS - IF E ELSE 
// let condicao = false 

// if(condicao){
//     console.log("Entrou no if")
// }else{
//     console.log("Entrou no else")
// }

// OPERADORES DE COMPARAÇÃO 
// == (COMPARACÃO)
// != (DIFERENÇA)
// > (MAIOR QUE)
// < (MENOR QUE)
// >= (MAIOR OU IGUAL A)
// <= (MENOR OU IGUAL A)
// === (IGUAL AO VALOR E O TIPO)
// !== (DIFERENÇA ENTRE O VALOR E O TIPO)
// || (OU)
// && (E)


// (AS DUAS BARRAS SERVEM PARA FAZER COMENTARIOS QUE NÃO RODARÃO)

// let idadeUser = Number(prompt("Digite sua idade")) 

// if(idadeUser >= 18){
//     console.log("Você tem a idade nescessária para assistir cine prive :)")
// }else{
//     console.log("Vai ficar na vontade hoje, filhote :(")
// }

// ESCOPO E OPERADORES E E OU 

// let idade = Number(prompt("Digite a sua idade"))

// if(idade){
//     console.log(idade)
//     let outro = "William" // IMPORTANTE DIZER QUE O VAR NÃO RESPEITA O ESCOPO, POR ISSO USAMOS O LET NO SEU LUGAR
//     console.log(outro)
//     console.log("Entrou no if")
//     if(true){
//         console.log("no 3ª escopo")
//         console.log(outro)
//     }
// }else{
//     console.log("Entrou no else")
// }

// console.log("SAI  DO ESCOPO")
// console.log(outro)

// OPERADORES E E OU
// PONDO EM PRÁTICA 

// let idade = Number(prompt("Digite seu nome"))
// let nome = prompt("Digite seu nome")

// if(idade === 20 &&  nome === "William"){
//     console.log("Seu nome é William e você tem 20 anos")
// }else if(idade === 20 || nome === "William"){
//     console.log("Você tem 20 anos ou seu nome é  William")
// }else{
//     console.log("Seu nome não é William e você não tem 20 anos")
// }

// Variáveis/extraindo informções do usuário
let fome = prompt("Ta com fome? (s/n)")
let dinheiro = prompt("Tá com dinheiro? (s/n)")
let restaurante = prompt("Restaurante ta funcionando hoje (s/n)")

// Mostrando informações no usuário
if(fome == "s" && dinheiro == "n" && restaurante == "n"){
    console.log("Vai jantar em casa hoje")
}else if(fome && dinheiro == "s" && restaurante == "n"){
    console.log("Pede um delivery")
}else{
    console.log("Tá com sorte em mano, vai sair de casa hoje hehehe")
} 