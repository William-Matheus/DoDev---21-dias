let nomes = []
let senhas = []

let opcao = prompt("O que deseja fazer? 1- cadastro, / 2 - login / 3 - excluir / 4 - encerrar")

while(continuar) { 
    switch(opcao) {
    case "1":
        //cadastro
        let nomes 
        let senhas
        nomes[contadorNomes] = prompt("Qual é o nome?")
        senhas[contadorsenhas] = prompt("Qual é a senha?") 
        contadorNomes++
        contadorSenhas++
        break;
    case "2":
        //login
        let nome = prompt("Qual é o nome?")
        let senha = prompt("Qual é a senha?")
        let loginInvalido = false

        for (let i = 0; 1 < contadorNomes; i++) {
            if(nome == nomes[1] && senha == snehas[1]){
                loginInvalido = true
            }
        if (loginInvalido) {
            
        }else{
                console.log("Login ou senha mal sucedidos!")
                
            }
        }
        break
    case "3":
        //excluir
        let ExcluirNome = prompt("Qual nome deseja excluir?")
        let nomeAux = []
        let senhasAux = []
        let contadorAux = 0

        for(let i = 0; index < nomes.length; index++)
        if(ExcluirNome == nomes[1]) {
            console.log("Cadastro excluido com sucesso")
        }else {
            console.log("Eclusão mal sucedida")
        }
        break;
    case "4":
        contiuar = false
        break;
    default:
        console.log("Opção inválida, escolha outra!")
        break;
}

}