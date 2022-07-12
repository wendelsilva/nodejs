function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if(!deuErro) {
                resolve({time: 6, to: "teste@udemy.com"});
            } else {
                reject("fila cheia");
            }
        }, 4000);
    })
}

enviarEmail("Olá mundo", "teste@udemy.com").then(({time, to}) => {
    console.log("email enviado", time, to);
}).catch((error) => {
    console.log("email não enviado", error);
})