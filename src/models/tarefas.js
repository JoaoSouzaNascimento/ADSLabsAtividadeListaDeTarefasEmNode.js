const database = require("../database/database")
const Sequelize = require("sequelize")
const Responsaveis = require("./responsaveis")

/*  
    Id (int),
    Título,
    Descrição (pode ser nulo),
    Data limite de conclusão,
    Data data de conclusao
*/
const Tarefas = database.define("tarefas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_limite: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    concluida: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    timestamp: true
})

Tarefas.belongsTo(Responsaveis)

module.exports = Tarefas