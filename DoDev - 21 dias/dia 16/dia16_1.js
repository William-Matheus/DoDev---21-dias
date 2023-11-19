let nomeArr = [];
let senhaArr = [];

function Solicitar(){
    let  solicitapreferencias = prompt("Digite a opção que você deseja? \n1. cadastro\n2. login\n3. excluir cadastro\n4. encerrar programa");
    return solicitapreferencias;
}

function Cadastro(){
    nomeArr.push(prompt("Digite um nome:"));
    senhaArr.push(prompt("Digite uma senha:"));
}

function Login(nomeUsuario, senhaUsuario){
    let item = nomeArr.indexOf(nomeUsuario);
    if(item !== -1 && senhaArr[item] == senhaUsuario){
        return true;
    }else{
        return false;
    }
}

function Excluir(nomeUsuario){
    let item = nomeArr.indexOf(nomeUsuario)
    if(item !== -1){
        nomeArr.splice(item, 1);
        senhaArr.splice(item, 1);
        alert("Informações excluídas com sucesso!");
    }else{
        alert("Informações não encontradas!");
    }
}

let prosseguir = true;
while(prosseguir){
    let alternativa = Solicitar();

    switch(alternativa){
        case "1":
            Cadastro();
            break;
        case "2":
            let nomeLogar = prompt("Digite seu nome:")
            let senhalogar = prompt("Digite sua senha:")
            let logar = Login(nomeLogar, senhalogar)
            if(logar){
                alert("Login bem sucedido!");
            }else{
                alert("Seu nome ou senha estão incorretos!");
            }
            break;
        case "3":
            let excluircadastro = prompt("Digite seu nome para excluír seu cadastro:");
            Excluir(excluircadastro);
            break;
        case "4":
            prosseguir = false;
            break;
        default:
            alert("A opção escolhida está inválida ou não existe. Tente de novamente.");
            break;
    }
}