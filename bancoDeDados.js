const mongoose = require('mongoose')

async function conectaBancoDeDados(){
    try{
        console.log('Conexão com o banco de dados iniciou')

    await mongoose.conect('mongodb+srv://thaisdavilla:rxoEWbsf6rwI1Po@clustermulheres.ln3naqp.mongodb.net/?retryWrites=true&w=majority')

    console.log('Conexão com o banco de dados feita com sucesso.')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados