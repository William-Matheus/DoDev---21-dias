//CLASSE CARRO
class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome; 
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }
    recebeDistanciaMtsEcalcula(){
        let distancia = parseInt(prompt("Digite a distância que você vai percorrer:"))
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

let fichaTecnicaCarro = new Carro ("Mercedes", 1063
, 359, 2.4);
let tempoPercorridoPeloCarro = fichaTecnicaCarro.recebeDistanciaMtsEcalcula();
console.log(`O carro da sua equipe é: ${fichaTecnicaCarro.Nome}
A potencia do carro: ${fichaTecnicaCarro.Potencia} cv
Velocidade Máxima: ${fichaTecnicaCarro.VelocidadeMaxima} Km/h
Acelaração: ${fichaTecnicaCarro.Aceleracao} seg`)
console.log(`E o tempo percorrido foi de: ${tempoPercorridoPeloCarro.toFixed(2)}`)