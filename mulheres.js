const express = require("express") // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const conectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo banco de dados
conectaBancoDeDados() //chamando a função que liga ao banco de dados

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

//patch
function corrigeMulher(request, response){
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id){
            return mulher 
        }

    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//delete
function deletaMulher(request, response){
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get("/mulheres", mostraMulheres)) //rota get/mulheres
app.use(router.post("/mulheres", criaMulher)) //rota post/mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)) //rota patch/mulheres
app.use(router.delete("/mulheres/:id", deletaMulher)) //rota deleta/mulheres

//porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.listen(porta, mostraPorta) //ouvindo a porta