const service = require("../services/responsaveis")

function list(req, res) {
    service.list(req.query)
        .then((responsaveis) => {
            return res.send({ dados: responsaveis })
        })
}
function create(req, res) {
    service.create(req.body)
        .then((responsavelCriado) => {
            return res.status(201).send({
                message: "Novo responsavel criado com sucesso",
                responsavel: responsavelCriado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}
function update(req, res) {
    service.update(req.params.id, req.body)
        .then((responsavelEditado) => {
            console.log(responsavelEditado)
            if(!responsavelEditado)
                return res.send({ message: "Responsavel não foi encontrado"})

            return res.send({
                message: "Responsavel editado com sucesso",
                pessoa: responsavelEditado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}
function remove(req, res) {
    service.remove(req.params.id)
        .then((responsavelRemovido) => {
            if(!responsavelRemovido)
                return res.send({ message: "Responsavel não foi encontrado"})

            return res.send({
                message: "Responsavel removido com sucesso",
                pessoa: responsavelRemovido
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

module.exports = {list, create, update, remove} 