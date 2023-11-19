// Biblioteca DoDev
class Livro{
    Titulo //Nome do livro
    Autor //Escritor do livro
    Editora //Empresa que publicou o livro 
    AnoPublicacao //Ano de publicaçaõ do livro
    Disponibilidade = true //Disponibilidade do livro (true ou false)
    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}

let livrosArr = []
livrosArr.push(new Livro("Arquitetura limpa", "Airton", "Editora Fulano", 2008));
livrosArr.push(new Livro("Código limpo", "José", "Editora fulano", 2007));
livrosArr.push(new Livro("Primeiro milhão", "Raiam Santos", "Editora ciclano", 2023));
livrosArr.push(new Livro("A arte da guerra", "Joana", "Editora leia", 2011));
livrosArr.push(new Livro("Maiss esperto que o diabo", "Mariana", "Primeiro milhão", "Editora azul", 2009));
livrosArr.push(new Livro("Pense enriqueça", "Pedro", "Editora ciclano", 2010));

class Biblioteca{
    Nome; // Nome da biblioteca
    Endereco; // Localização da biblioteca
    Telefone; // Telefone para contato da biblioteca
    AcervoLivros = [] // Livros existentes na biblioteca
    constructor(nome, endereco, telefone, acervoLivros){
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoLivros = acervoLivros; 
    }
    BuscarLivroPeloTitulo(titulo){
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo){
                console.log(livro);
            }
        })
    }
    EmprestimoLivro(titulo){
        let emprestimo = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo){
                if (livro.Disponibilidade === true){
                    livro.Disponibilidade = false
                    emprestimo = true
                }
            }
        })
        if (emprestimo){
            return true
        }else{
            return false
        }
    }
    DevolucaoLivro(titulo){
        livrosArr.forEach(livro => {
            if (livro.Titulo === titulo){
                livro.Disponibilidade = true
                alert("Livro retornado.")
            }
        })
    }
    
}

let biblioteca = new Biblioteca("Biblioteca Central", "102030", "Rua 10", livrosArr)

biblioteca.BuscarLivroPeloTitulo("Primeiro milhão") 
biblioteca.EmprestimoLivro("Código limpo") 
biblioteca.DevolucaoLivro("Primeiro milhão")