function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------
            ${corpo}
            ----------------------
            De: Wendel silva
        `)
    }, 8000);
}

console.log("Inicio do envio de email")
enviarEmail("Oi, seja bem vindo", "teste@teste.com")
console.log("Enviado")