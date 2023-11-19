// Hotel DoDev
class Hotel{
    Id;
    Nome; 
    Categoria;
    Endereco;
    Telefone;
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva{
    Id;
    IdHotel;
    Responsavel;
    DiaEntrada;
    DiaSaida;
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hotelArr = [];
let reservaArr = [];
let idHotel = 1;
let idReserva =1;

function CadastrarHotel(){
    let nomeHotel = prompt("Digite o nome do hotel:");
    let categoriaHotel = parseInt(prompt("Digite a categória do hotel:"));
    let enderecoHotel = prompt("Digite o endereço do hotel:");
    let telefoneHotel = prompt("Digite o telefone do hotel:");
    let hotel = new Hotel(idHotel, nomeHotel, categoriaHotel, enderecoHotel, telefoneHotel);
    idHotel++;
    hotelArr.push(hotel);
}

function ReservaHotel(){
    let idHotel;
    let encontrase = false;
    do {
        idHotel = parseInt(prompt("Digite aqui o id do hotel:"));
        for (let a = 0; a < hotelArr.length; a++){
            if (idHotel == hotelArr[a].Id){
                a = hotelArr.length;
                encontrase = true;
            } else if (a == hotelArr.length - 1){
                alert("O id do hotel inserido não cadastrado!");
            }
        }
    } while (!encontrase);

    let nomeResponsavel = prompt("Digite aqui o nome do responsável:");
    let diaEntrada = parseInt(prompt("Digite aqui o dia de entrada:"));
    let diaSaida;

    do {
        diaSaida = parseInt(prompt("Digite aqui o dia saída:"));
        if (diaSaida < diaEntrada){
            alert("O dia da sua saida dev ser maior que o dia da sua entrada!");
        }
    } while (diaSaida < diaEntrada);

    let reservas = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida);
    idReserva++;
    reservaArr.push(reservas);
} 

function LocalizarReservaPorHotel(idHotel){
    reservaArr.forEach(reserva => {
        if (idHotel === reserva.IdHotel){
            let a = idHotel - 1;
            console.log(`Nome do hotel: ${hotelArr[a].Nome}`);
            console.log(`Nome do responsável da reserva: ${reserva.Responsavel}`);
            console.log(`Dia de entrada: ${reserva.DiaEntrada}`);
            console.log(`Dia de saída: ${reserva.DiaSaida}`);
        }
});
}

function LocalizarHotelPorReserva(idReserva){
    let idHotel = reservaArr[idReserva -1].IdHotel;
    console.log(`Nome do hotel: ${hotelArr[idHotel - 1].Nome}`);
    console.log(`Endereço do hotel: ${hotelArr[idHotel -1].Endereco}`);
    console.log(`Dia de entrada: ${reservaArr[idReserva - 1].DiaEntrada}`);
    console.log(`Dia de saída: ${reservaArr[idReserva - 1].DiaSaida}`);
}

function LocalizarReservaPorNomes(nomeResponsavel){
    for (let b = 0; b < reservaArr.length; b++){
        if (nomeResponsavel == reservaArr[b].Responsavel){
            console.log(`O id da sua reserva: ${reservaArr[b].Id}`);
            console.log(`O hotel ${hotelArr[(reservaArr[b].IdHotel) - 1].Nome}`);
        }
    }
}

function LocalizarHotelPorCategoria(categoriaHotel){
    let hoteisBuscados = [];
    for (let c = 0; c < hotelArr.length; c++){
        if (categoriaHotel == hotelArr[c].Categoria){
            hoteisBuscados.push(hotelArr[c].Nome)
        }
    }
    return hoteisBuscados;
}

function AtualizacaoDeTelefone(idHotel, telefoneHotel){
    hotelArr[idHotel - 1].Telefone = telefoneHotel;
    alert("O número foi atualizado com sucesso!");
}

let prosseguir = true;
do {
    let alternativas = prompt(`Escolha uma alternativa: \n1- Cadastrar um hotel \n2- Cadastrar uma reserva \n3- Localizar reserva por hotel ${"\n4- Localizar hotel por reserva \n5- Localizar reserva por responsável \n6- Localizar hotéis por categoria \n7- Atualizar telefone de um hotel \n8 Encerrar programa"}`);

    switch(alternativas){
        case "1":
            CadastrarHotel()
            break;
        case "2":
            ReservaHotel()
            break;
        case "3":
            LocalizarReservaPorHotelparseInt((prompt("Digite aqui o id do hotel:")));
            break;
        case "4":
            LocalizarHotelPorReserva(parseInt(prompt("Digite aqui o id da reserva:")));
            break;
        case "5":
            LocalizarReservaPorNomes(prompt("Digite aqui o nome do responsável por fazer a reserva:"));
            break;
        case "6":
            let hoteisBuscados = LocalizarHotelPorCategoria(parseInt(prompt("Digite a categoria que você deseja procurar")))
            console.log(hoteisBuscados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite aqui o id do hotel que você quer atualizar"));
            let atualizaTelefone = prompt("Digite aqui o novo telefone:");
            AtualizacaoDeTelefone(idHotel, atualizaTelefone);
            break;
        case "8":
            alert("Programa finalizado!");
            prosseguir = false
            break;
        default:
            alert("Opção iválida ou não encontrada!")
            break;
    }
} while (prosseguir)