let numeArr = [];
let itemArr = [];
let posicaoItem = 0;

let numeroParaAchar = parseInt(prompt("Digite o número que deseja achar"))

for (let x = 0; x < 10; x++) {
    let numeroItem = parseInt(prompt(`Digite um número ${x + 1}`))
    numeArr.push(numeroItem)
}

for (let y = 0; y < 10; y++) {
    if (numeArr[y] === numeroParaAchar) {
        itemArr[posicaoItem] = y
        itemArr.push(y);
        posicaoItem++;
    }
}

console.log(`O número procurado ${numeroParaAchar} e o elemento ${itemArr}`)
