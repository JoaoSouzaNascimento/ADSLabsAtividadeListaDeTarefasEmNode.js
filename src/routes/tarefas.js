const express = require("express")
const controller = require("../controllers/tarefas")
const middlewaresTarefas = require("../middlewares/tarefas")

const router = express.Router()

router.get("/", controller.list)
router.post("/responsavel/:id", middlewaresTarefas.checkTitulo,middlewaresTarefas.checkDataLimite, controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.remove)

module.exports = router