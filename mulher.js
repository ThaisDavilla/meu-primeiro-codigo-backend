const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: "Thais D'Ávilla",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH6mZowXOLSCQ/profile-displayphoto-shrink_200_200/0/1668211988889?e=1686787200&v=beta&t=kwtVIRlUSr3vpysSZmvI5fZ7fSa7uVdN84YwYsI5n_4",
        minibio: "Front End Developer"
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)