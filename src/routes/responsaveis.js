const express = require("express")
const controller = require("../controllers/responsaveis")
const middlewaresResponsaveis = require("../middlewares/responsaveis")

const router = express.Router()

router.get("/", controller.list)
router.post("/", middlewaresResponsaveis.checkNome, middlewaresResponsaveis.checkData, controller.create)
router.put("/:id/modificar-nome", middlewaresResponsaveis.checkNome, middlewaresResponsaveis.blockData, controller.update)
router.put("/:id/modificar-data", middlewaresResponsaveis.blockNome, middlewaresResponsaveis.checkData, controller.update)
router.put("/:id/modificar-todos", middlewaresResponsaveis.checkNome, middlewaresResponsaveis.checkData, controller.update)
router.delete("/:id", controller.remove)

module.exports = router