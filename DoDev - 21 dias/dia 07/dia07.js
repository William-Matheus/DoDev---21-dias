// DECLARANDO VARIÁVEIS 
let nota;
let sexo;
let contCadastro = "sim";

let mediaGeral = 0;
let qtdHomensHenviaramNota = 0;
let qtdMulheresTiraramAcimaDe7 = 0;
let notaMaiorEntreHomens = 0;
let somaNotas = 0;
let qtdDeAlunos = 0;

while(contCadastro == "sim"){
    nota = parseInt(prompt("Digite sua nota"));
    sexo = prompt("Digite seu sexo (M para masculino e F para feminino)");
    
    if(sexo === "M"){
        if(nota > notaMaiorEntreHomens){
            notaMaiorEntreHomens = nota;
        }
        qtdHomensHenviaramNota++;
    }
    if(sexo === "F"){
        if (nota > 7){
            qtdMulheresTiraramAcimaDe7++;
        }
    }

    somaNotas += nota;
    qtdDeAlunos++;

    contCadastro = prompt("Você deseja continuar cadastrando (sim/não");
}

mediaGeral = somaNotas / qtdDeAlunos;

console.log("A média geral dos alunos é" + mediaGeral.toFixed(2) + ", a quantidade de homens que enviaram nota é" + qtdHomensHenviaramNota + ", a quantidade de mulheres que tiraram nota acima de 7 é" + qtdMulheresTiraramAcimaDe7 + " e a maior nota entre os homens é" + notaMaiorEntreHomens)