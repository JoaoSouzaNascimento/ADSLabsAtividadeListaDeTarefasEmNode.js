const Responsaveis = require("../models/responsaveis")

function checkTitulo (req, res, next) {
    const titulo = req.body.titulo;

    if(!titulo)
        return res.status(400).send({ message: "Por favor envie um título para a tarefa"});

    if(!/^[A-Za-z]+$/.test(titulo))
        return res.status(400).send({ message: "O titulo deve conter apenas letras"});

    if(titulo.length < 3)
        return res.status(400).send({ message: "O titulo deve ter pelo menos 3 letras"});

    return next()
}

function updatecheckTitulo (req, res, next) {
    const titulo = req.body.titulo;

    if(titulo){
        if(!/^[A-Za-z]+$/.test(titulo))
            return res.status(400).send({ message: "O titulo deve conter apenas letras"});

        if(titulo.length < 3)
            return res.status(400).send({ message: "O titulo deve ter pelo menos 3 letras"});
    }

    return next()
}

function checkDataLimite(req, res, next) {
    const data_limite = req.body.data_limite;

    if(!data_limite)
        return res.status(400).send({ message: "Por favor envie a data limite de conclusão da tarefa"});

    const data = new Date(data_limite);
    
    if(isNaN(data.getTime())) 
        return res.status(400).send({ message: "Por favor envie uma data limite de conclusão válida"});

    return next();
}

async function updateCheckResponsavelId(req, res, next) {

    if(req.body.responsavelId) {
        responsavelEncontrado = await Responsaveis.findByPk(req.body.responsavelId)
        if(responsavelEncontrado == null)
            return res.status(400).send({ message: "Por favor envie um id de responsável válido"});
    }

    return next();
}

async function checkResponsavelId(req, res, next) {
    if(!req.body.responsavelId) {
        return res.status(400).send({ message: "Por favor envie um id de responsável"});
    }

    const responsavelEncontrado = await Responsaveis.findByPk(req.body.responsavelId)
    
    if(responsavelEncontrado == null)
        return res.status(400).send({ message: "Por favor envie um id de responsável válido"});
    return next();
}

module.exports = {checkTitulo, updatecheckTitulo, checkDataLimite, checkResponsavelId, updateCheckResponsavelId}