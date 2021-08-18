function soma(a, b) {
    return a + b;
}
function mult(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}
// module.exports = soma; Exporta a função soma para o módulo global

module.exports = {
    soma,
    mult,
    sub,
    div
}; // Exporta todas as funções para o módulo global