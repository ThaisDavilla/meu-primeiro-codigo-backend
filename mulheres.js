const express = require("express") // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const app = express() //iniciando o app
app.use(express.json())
const porta = 3333 //criando a porta

//lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: "Thais D'Ávilla",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH6mZowXOLSCQ/profile-displayphoto-shrink_200_200/0/1668211988889?e=1686787200&v=beta&t=kwtVIRlUSr3vpysSZmvI5fZ7fSa7uVdN84YwYsI5n_4",
        minibio: "Front End Developer"
    },
    {
        id:'2',
        nome: "Thais D'Ávilla",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH6mZowXOLSCQ/profile-displayphoto-shrink_200_200/0/1668211988889?e=1686787200&v=beta&t=kwtVIRlUSr3vpysSZmvI5fZ7fSa7uVdN84YwYsI5n_4",
        minibio: "Front End Developer"
    },
    {
        id:'3',
        nome: "Thais D'Ávilla",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH6mZowXOLSCQ/profile-displayphoto-shrink_200_200/0/1668211988889?e=1686787200&v=beta&t=kwtVIRlUSr3vpysSZmvI5fZ7fSa7uVdN84YwYsI5n_4",
        minibio: "Front End Developer"
    }
]

//get
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//post
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres)) //rota get/mulheres
app.use(router.post("/mulheres", criaMulher)) //rota post/mulheres
app.listen(porta, mostraPorta) //ouvindo a porta