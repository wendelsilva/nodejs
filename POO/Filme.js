class Filme {

    // Atributos
    constructor(titulo, ano, genero, diretor, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    // Metodos
    Reporduzir() {
        console.log('Reporduzir....');
    }

    Pausar() {
        console.log('Pausar ||');
    }

    Avancar() {
        console.log('Avancar >>');
    }

    Fechar() {
        console.log('Fechar X');
    }
}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h");

// vingadores.titulo = "Vingadores 2";
// vingadores.ano = 2014;
// vingadores.genero = "Ação";

console.log(vingadores.titulo);
console.log(vingadores.ano);
console.log(vingadores.genero);

vingadores.Reporduzir();

var hulk = new Filme();

console.log(hulk.titulo);
console.log(hulk.ano);

hulk.Pausar();

var starwars = new Filme();

console.log(starwars.titulo);
console.log(starwars.ano);

starwars.Pausar();
starwars.Avancar();
starwars.Reporduzir();