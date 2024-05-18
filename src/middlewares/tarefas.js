function checkTitulo (req, res, next) {
    const titulo = req.body.titulo;

    if(!titulo)
        return res.status(400).send({ message: "Por favor envie um título para a tarefa"});

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

module.exports = {checkTitulo, checkDataLimite}