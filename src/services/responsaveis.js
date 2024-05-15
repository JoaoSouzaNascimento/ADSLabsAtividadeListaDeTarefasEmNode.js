const Responsaveis = require("../models/responsaveis")

async function list(queryParams) {
    return await Responsaveis.findAll({ where: queryParams })
}
async function create(dados) {
    const novoResponsavel = await Responsaveis.create(dados)

    return novoResponsavel
}
async function update(idResponsavel, dados) {
    const responsavelEncontrado = await Responsaveis.findByPk(idResponsavel)

    if(responsavelEncontrado){
        responsavelEncontrado.nome = dados.nome ?? responsavelEncontrado.nome
        responsavelEncontrado.data_nascimento = dados.data_nascimento ?? responsavelEncontrado.data_nascimento
        await responsavelEncontrado.save();
    }

    return responsavelEncontrado
}
async function remove(idResponsavel) {
    const responsavelEncontrado = await Responsaveis.findByPk(idResponsavel)
    if(responsavelEncontrado)
        await responsavelEncontrado.destroy()

    return responsavelEncontrado
}

module.exports = {list, create, update, remove}