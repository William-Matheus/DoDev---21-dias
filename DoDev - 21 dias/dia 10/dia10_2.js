let numeArr = [];
let rrAnume = [];

for (let a = 0; a < 5; a++) {
    let numero = parseInt(prompt(`Digite ${a + 1}º de itens`))
    numeArr[a] = numero
}

console.log(`O array primario: ${numeArr}`);

let medidor = 4
for (let b = 0; b < 5; b++) {
    rrAnume[b] = numeArr[medidor]
    medidor--
}

console.log(`O array inverso: ${rrAnume}`);

numeArr = [];
rrAnume = [];

let quantidade = 0

let pergunta = prompt("Você deseja adicionar mais números? (Sim/Não)");

if (pergunta == "Sim") {
    quantidade = prompt("Quantos números você deseja inserir:");

    for (c = 0; c < quantidade; c++) {
    numero = parseInt(prompt(`Digite ${c + 1}`))
    numeArr.push(numero);
}

for (d = quantidade - 1; d >= 0; d--) {
    rrAnume.push(numeArr[d]);
}
console.log(`Novo array primario ${numeArr}`);
console.log(`Novo array inverso ${rrAnume}`);
} else {
    console.log("Até mais!")
}



