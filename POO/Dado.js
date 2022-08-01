// Sistema de Cassino
// Vários tipos de dados
// Rolar dados

class Dado {

    constructor(faces) {
        this.faces = faces;
    }

    Rolar() {
        console.log("Resultado do dado: " + this.GetRandomInt(1, this.faces));
    }

    GetRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();
