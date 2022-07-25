class Carro {

    constructor() {
        this.nome = '';
        this.produtora = '';
        this.preco = 0;
        this.ano = 0;
        this.disponibilidade = true;
    }

    Alugar() {
        console.log('Alugar');
    }

    Devolver() {
        console.log('Devolver');
    }

    DeixarIndisponivel() {
        console.log('DeixarIndisponivel');
    }

    DeixarDisponivel() {
        console.log('DeixarDisponivel');
    }
}