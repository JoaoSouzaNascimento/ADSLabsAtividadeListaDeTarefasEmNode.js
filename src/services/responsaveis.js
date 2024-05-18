const Responsaveis = require("../models/responsaveis")
const Tarefas = require("../models/tarefas")
const { Op } = require('sequelize');

async function list(queryParams) {
    return await Responsaveis.findAll({ where: queryParams })
}

async function listResponsaveisSemTarefasAtribuidas() {
    const responsaveisComTarefasAtribuidas = await Responsaveis.findAll({
        include: {
            model: Tarefas,
            where: {
            status: 'atribuido',
            },
            required: true,
        },
    });

    const idsResponsaveisComTarefasAtribuidas = responsaveisComTarefasAtribuidas.map(responsavel => responsavel.id_responsavel);

    return await Responsaveis.findAll({
        where: {
            id_responsavel: {
                [Op.notIn]: idsResponsaveisComTarefasAtribuidas,
            },
        },
    });
}

async function listTarefas(idResponsavel, queryParams) {
    const responsavelEncontrado = await Responsaveis.findByPk(idResponsavel)
    return await responsavelEncontrado.getTarefas({where: queryParams})
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

module.exports = {list, create, update, remove, listTarefas, listResponsaveisSemTarefasAtribuidas}