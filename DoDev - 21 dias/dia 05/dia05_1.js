// SWITCH CASE

numero1 = Number(prompt("Digite um número"))
numero2 = Number(prompt("Digite um número"))
operacoes = prompt("Escolha sua operação matemática (+, *, -, /)")

switch(operacoes){
    case "+":
        let soma = numero1 + numero2
        console.log("A soma dos  núemros é:" , soma)
        break;
    case "*":
        let multiplicacao = numero1 * numero2
        console.log("A multiplicação dos  núemros é:" , multiplicacao)
        break;
    case "-":
        let subtracao = numero1 - numero2
        console.log("A subtração dos  núemros é:" , subtracao)
        break;
    case "/":
        let divisao = numero1 / numero2
        console.log("A divisão dos  núemros é:" , divisao)
        break;
}