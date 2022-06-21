// function enviarEmail(corpo, para, callback) {
//     setTimeout(() => {
//         console.log(`
//             Para: ${para}
//             ----------------------
//             ${corpo}
//             ----------------------
//             De: Wendel silva
//         `)

//         callback();
//     }, 8000);
// }

// console.log("Enviando Email...")
// enviarEmail("Oi, seja bem vindo", "teste@teste.com", () => {
//     console.log("Email Enviado")
// })


// Passando Parâmetros para Callbacks

// function enviarEmail(corpo, para, callback) {
//     setTimeout(() => {
//         console.log(`
//             Para: ${para}
//             ----------------------
//             ${corpo}
//             ----------------------
//             De: Wendel silva
//         `)

//         callback("Enviado", 5, "8s");
//     }, 5000);
// }

// console.log("Enviando Email...")
// enviarEmail("Oi, seja bem vindo", "teste@teste.com", (status, qtd, tempo) => {
//     console.log(`Email ${status} para ${qtd} pessoas em ${tempo}`)
// })

// Tratando erros

function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var deuErro = false;

        if(deuErro) {
            callback("O Envio do email falhou")
        } else {
            console.log(`
                Para: ${para}
                ----------------------
                ${corpo}
                ----------------------
                De: Wendel silva
            `)

            callback();
        }
    }, 5000);
}

console.log("Enviando Email...")
enviarEmail("Oi, seja bem vindo", "teste@teste.com", (erro) => {
    if(erro == undefined) {
        console.log("Email enviado")
    } else {
        console.log(`${erro}`)
    }
})