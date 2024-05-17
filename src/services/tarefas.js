const Tarefas = require("../models/tarefas")

async function list(queryParams) {
    return await Tarefas.findAll( { where: queryParams } )
}
async function create(dados) {
    const novaTarefa = await Tarefas.create(dados)

    return novaTarefa
}
async function update(idTarefa, dados) {
    const tarefaEncontrada = await Tarefas.findByPk(idTarefa)

    if(tarefaEncontrada){
        tarefaEncontrada.titulo = dados.titulo ?? tarefaEncontrada.titulo
        tarefaEncontrada.descricao = dados.descricao
        tarefaEncontrada.data_limite = dados.data_limite ?? tarefaEncontrada.data_limite
        tarefaEncontrada.data_conclusao = dados.data_conclusao 
        tarefaEncontrada.concluida = dados.concluida
        await tarefaEncontrada.save();
    }

    return tarefaEncontrada
}
async function remove(idTarefa) {
    const tarefaEncontrada = await Tarefas.findByPk(idTarefa)
    if(tarefaEncontrada)
        await tarefaEncontrada.destroy()

    return tarefaEncontrada
}

module.exports = {list, create, update, remove}