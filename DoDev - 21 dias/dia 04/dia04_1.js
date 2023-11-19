// Desafio 2
let nomeUser = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let cnh =  prompt("Possuí CNH? (s/n)")
let automovel = prompt("Possuí carro? (s/n)")

if(idade < 18 || cnh == "n"){
    console.log(nomeUser + " você não pode dirigir")
}else if(idade >= 18  && cnh == "s" && automovel == "n"){
    console.log(nomeUser + " você pode dirigir, mas não tem carro")
}else if(idade >= 18 && cnh == "s" && automovel == "s"){
    console.log(nomeUser + " você será o motora")
}else{
    console.log("Nenhuma das opções")
}
