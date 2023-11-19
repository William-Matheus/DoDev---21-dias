//CLASSE SETUP
class Setup{
    Tipo 
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, integrado, armazenamento, memoriaram, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = integrado;
        this.Armazenamento = armazenamento; 
        this.MemoriaRam = memoriaram; 
        this.Ssd = ssd; 
    }
    mostrarNoConsole(){
        console.log(`Seu Setup: Tipo: ${this.Tipo}, Processador: ${this.Processador}, Placa de vídeo: ${this.Video}, Armazenamento: ${this.Armazenamento}GB, Memoria Ram: ${this.MemoriaRam}GB, SSD: ${this.Ssd}.`);
    }
}

let meuSetup = new Setup("desktop", "Celeron N4020", "Integrado", 128, 4, true);
meuSetup.mostrarNoConsole();