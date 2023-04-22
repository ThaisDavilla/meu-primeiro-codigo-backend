const express = require("express") // iniciando o express
const router = express.Router() // configurando a primeira parte da rota

const cors = require('cors')// permissão para consumo da api

const conectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo banco de dados
conectaBancoDeDados() //chamando a função que liga ao banco de dados

const Mulher = require('./mulherModel')

const app = express() //iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 //criando a porta

//get
async function mostraMulheres(request, response) {
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)

    }catch (erro){
        console.log(erro)
    }
    
}

//post
async function criaMulher(request, response){
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }
}

//patch
async function corrigeMulher(request, response){

    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem){
            mulherEncontrada = request.body.imagem
        }

        if (request.body.citacao){
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    }catch(erro){
        console.log(erro)
    }
}

//delete
async function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})
        
    }catch(erro){
        console.log(erro)
    }

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