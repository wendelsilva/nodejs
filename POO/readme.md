# Orientação a Objetos com JavaScript

## 5 Pilares
- [ ] herança
- [ ] polimorfismo
- [ ] encapsulamento
- [ ] abstração
- [ ] composição

### Classificação

Agrupar objetos semelhantes e definir características em comun

### Classes
- [ ] Atributos -> Atributos para um jogo: 'titulo', 'Produtora', 'preço'
- [ ] Métodos -> Métodos para um jogo: 'abrir',  'carregar', 'fechar', 'executar', 'atualizar'

### Classe no JavaScript
```
class jogo {

    constructor() {
        this.titulo = '';
        this.genero = '';
        this.produtora = '';
        this.preço = 0;
    }

    Abrir() {
        console.log('Jogo Abrindo');
    }

    Carregar() {
        console.log('loading')
    }

    Fechar() {
        console.log('Aperte ESC para fechar...');
    }
}
```

### Abstração

Aspectos essenciais de um conceito qualquer. Observar a realidade e dela abstrair entidades, ações e características essenciais para uma aplicação