//Reajuste 
let nome;
let salario;

function infos(){
    nome = prompt("Digite seu nome:")
    salario = parseFloat(prompt("Digite seu salário:"))
    CalculaAumento(nome, salario);
}

function CalculaAumento(nome, salario){
    let aumento = 0;

    if (salario <= 1500){
        aumento = 0.2;
    }else if (salario <= 2000){
        aumento = 0.15;
    }else if (salario <= 3000){
        aumento = 0.1
    }else{
        aumento = 0.05
    }
    

    let salarioAumentado = salario + (salario * aumento);

    console.log(`Olá, ${nome}!`)
    console.log(`Seu salário atual: R$${salario}`)
    console.log(`Sue aumento: ${aumento * 100}%`)
    console.log(`Seu salário com aumento: R$${salarioAumentado}`)

    perguntaContinuar();
}

function perguntaContinuar(){
    let resultado = prompt("Deseja continuar inserindo dados? sim/nao")
    if (resultado != "sim"){
        console.log("Programa finalizado, Obrigado por colaborar!");
    }else{
        infos();
    }
}

infos()


