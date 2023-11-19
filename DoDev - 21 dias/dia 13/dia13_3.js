//CORRIDA
class Carro{
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia= potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }
    CalculaMediaDeTempo(distancia){
        let resposta = distancia / (this.VelocidadeMaxima - this.Aceleracao)
        return resposta
    }
}

class Corrida{
    Nome 
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(nome, tipo, distancia, participantes, vencedor){
        this.Nome = nome 
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }
    VerificaVencedor(){
        let carroMenorTempo = this.Participantes[0].CalculaMediaDeTempo(this.Distancia)
        let carroVencedor = this.Participantes[0]

        for(let item = 1; item < this.Participantes.length; item++){
            let etapa = this.Participantes[item].CalculaMediaDeTempo(this.Distancia)
            if (etapa < carroMenorTempo){
                carroMenorTempo = etapa
                carroVencedor = this.Participantes[item]
            }

        }

        return this.Vencedor = carroVencedor 
    }

    MostrarCarroVencedor(){
        alert(`O carro vencedor é: ${this.Vencedor.Nome}`)
    }
}
let corrida = new Corrida("Mercedes F1", "Fórmula 1", 4309)

corrida.Participantes[0] = new Carro("RedBull F1", 140, 150, 4)
corrida.Participantes[1] = new Carro("Ferrari F1", 220, 200, 6)
corrida.Participantes[2] = new Carro("Nissan F1", 315, 330, 11)

corrida.VerificaVencedor()
corrida.MostrarCarroVencedor()