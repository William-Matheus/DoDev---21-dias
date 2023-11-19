let nomeArr = [];
let senhaArr = [];
let solicitacao = true
let dado = 0;

while (solicitacao) {
    let alternativa = prompt("Escolha uma opção: 1) Cadastro / 2) Login / 3) Excluir / 4) Encerrar");
    switch (alternativa) {
        case "1":
            nomeArr[dado] = prompt("Digite seu nome para cadastro:");
            senhaArr[dado] = prompt("Digite sua senha para cadastro:");
            dado++
            break;
        case "2":
            let loginNome  = prompt("Digite seu nome para login:")
            let loginSenha = prompt("Digite sua senha para login:")
            let loginVerdadeiro = false  

            for (let a = 0; a < loginNome.length; a++) {
                if (loginNome == nomeArr[a] && loginSenha == senhaArr[a]) {
                    loginVerdadeiro = true
                }
            }
            if (loginVerdadeiro) {
    alert("Login efetuado sem problemas!")
}else {
    alert("Seu login ou senha estão incorretos!")
    
} 
break;
        case "3":
            let excluirNome = prompt("Deseja excluir o nom inserido?");
            let nomeDeAjuda = [];
            let senhaDeAjuda = [];
            let dadoDeAjuda = 0;

            for (let b = 0; b  < dadoDeAjuda; b++) {
                if (excluirNome == nomeArr[b]) {
                    alerte("Informações cadastradas foram excluídas com sucesso!")
                }else {
                    nomeDeAjuda[dadoDeAjuda] = nomeArr[b]
                    senhaDeAjuda[dadoDeAjuda] = senhaArr[b]
                    dadoDeAjuda++
                }
            }
            nomeArr = nomeDeAjuda
            senhaArr = senhaDeAjuda
            dado--

            break;
        case "4":
            solicitacao = false
            break;
        default:
            console.log("A opção ecolhida é inválida, por favor escolha outra!")
            break;
    } 
    

}

