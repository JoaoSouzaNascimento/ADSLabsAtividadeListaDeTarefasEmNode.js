const database = require("../database/database")
const Sequelize = require("sequelize")
const Responsaveis = require("../models/responsaveis")
/*  
    Id (int),
    Título,
    Descrição (pode ser nulo),
    Data limite de conclusão,
    Data data de conclusao
*/
const Tarefas = database.define("tarefas", {
    id_tarefa: {
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
    data_conclusao: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM,
        values: ['atribuido', 'entregue', 'pendente'],
        allowNull: false
    }
}, {
    timestamp: true
})

Responsaveis.hasMany(Tarefas);
Tarefas.belongsTo(Responsaveis);

module.exports = Tarefas