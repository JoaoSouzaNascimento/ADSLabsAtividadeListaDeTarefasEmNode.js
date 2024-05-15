require("dotenv").config({path:".env"})
require("./database/database")
const express = require("express")
const responsaveisRouter = require("./routes/responsaveis")
const tarefasRouter = require("./routes/tarefas")

const app = express()

app.use(express.json())
app.use("/responsaveis",responsaveisRouter)
app.use("/tarefas",tarefasRouter)

app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app