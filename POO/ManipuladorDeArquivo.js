class Leitor {

    Ler(caminho) {
        return "Conteudo do Arquivo";
    }
}

class Escritor {
    Escrever(conteudo) {
        console.log("Conteúdo escrito");
    }
}

class Criador {
    Criar(nome) {
        console.log("Arquivo criado");
    }
}

class Destruidor {
    Deletar(nome) {
        console.log("Deletando arquivo");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.Destruidor = new Destruidor();
    }

}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.Ler();