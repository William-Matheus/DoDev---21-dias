let alunoArr = [];
let notasArr = [];
let avancar = true
let marcador = 0;

while(avancar) {
    let nomes = prompt(`Digite o nome do ${marcador + 1}º aluno:`)
    let notas = parseInt(prompt("Digite a nota:"))
    
    alunoArr[marcador] = nomes;
    notasArr[marcador] = notas;
    marcador++
    let resultado = prompt("Deseja continuar? (Sim/Não)");
    if (resultado === "Não") {
        avancar = false
    }
}
console.log("As notas de todos alunos:");
    for (let a = 0; a < alunoArr.length; a++) {
        console.log(alunoArr[a] + " - " + notasArr[a])
}

let somaDasnotas = 0
for (let b = 0; b < notasArr.length; b++) {
    somaDasnotas += notasArr[b]
}
let media = somaDasnotas / alunoArr.length
console.log("A soma de todas as notas: " + somaDasnotas);
console.log("A média geral de todos os alunos: " + media.toFixed(2));
