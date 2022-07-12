function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 5})   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({email: "teste@guia.com.br"})
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "teste@udemy.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "wendel", lang: "JS"},
                {name: "ella", lang: "Swift"}
            ]) 
        },3000)
    })
}

// async function principal() {
//     var usuario = await pegarUsuarios();
//     console.log(usuario);
// }

// principal();

async function principal() {
    var { id } = await pegarId();
    var { email } = await buscarEmailNoBanco(id);
    enviarEmail("Olá como vai?", email).then(()  => {
        console.log("Email enviado, para o usuário com id: " + id);
    }).catch(err => {
        console.log(err);
    })
}

principal();

// console.log("Inicio!");
// pegarId().then(({id}) => {
//     buscarEmailNoBanco(id).then(({email}) => { 
//         enviarEmail("Olá, como vai?",email).then(() => {
//             console.log("Email enviado, para o usuário com id: " + id)
//         }).catch(err => {
//             console.log(err);
//         })
//     })
// })
// console.log("FIM");