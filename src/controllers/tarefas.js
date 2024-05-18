const Service = require("../services/tarefas")

function list(req, res) {
    Service.list(req.query)
        .then((tarefas) => {
            return res.send({ dados: tarefas })
        }), (error) => {
            return res.status(500).send({ message: error })
        }
}
function create(req, res) {
    Service.create(req.params.id, req.body)
        .then((tarefaCriada) => {
            if(!tarefaCriada)
                return res.send({ message: "Responsável não foi encontrado"})

            return res.status(201).send({
                message: "Nova tarefa criada com sucesso",
                tarefa: tarefaCriada
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}
function update(req, res) {
    Service.update(req.params.id, req.body)
        .then((tarefaEditada) => {
            if(!tarefaEditada)
                return res.send({ message: "Tarefa não foi encontrada"})

            return res.send({
                message: "Tarefa atualizada com sucesso",
                tarefa: tarefaEditada
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function remove(req, res) {
    Service.remove(req.params.id)
        .then((tarefaRemovida) => {
            if(!tarefaRemovida)
                return res.send({ message: "Tarefa não foi encontrada"})

            return res.send({
                message: "Tarefa removido com sucesso",
                tarefa: tarefaRemovida
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

module.exports = {list, create, update, remove}