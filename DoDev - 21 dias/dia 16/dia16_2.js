class Aluno{
    Nome 
    Idade
    Nota
    constructor(nome, idade, nota){
        this.Nome = nome
        this.Idade = idade
        this.Nota = nota
    }
}

let array = []

function CadastroAluno(nome, idade, nota, array){
    let alunoObj = new Aluno(nome, idade, nota)
    if(!array.some(x => x.Nome == nome))
    array.push(alunoObj)
    return alunoObj
}

function OrdenarPorNota(array){
    array.sort((a, b) => a.Nota - b.Nota)
    return array
}

function OrdenarPorIdade(array){
    array.sort((a, b) => b.Idade - a.Idade)
    return array
}

function OrdenarPorNome(array){
    array.sort((a, b) => {
        let primeiroNome = a.Nome.toUpperCase();
        let segundoNome = b.Nome.toUpperCase();

        if (primeiroNome < segundoNome){
            return -1;
        }else if (primeiroNome > segundoNome){
            return 1;
        }
        return 0;
    });
    return array
}

function CalculoMedia(array){
    if (array.length === 0){
        return 0;
    }
    let somaDasNotas = 0;

array.forEach((aluno) => {
    somaDasNotas += Number(aluno.Nota)
});

let media = somaDasNotas / array.length;
return media
}