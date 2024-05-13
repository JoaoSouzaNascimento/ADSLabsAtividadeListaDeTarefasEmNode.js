require("dotenv").config({path:".env"})
const express = require("express")
const responsaveisRouter = require("./routes/responsaveis")

const app = express()
app.use(express.json())
app.use("/responsaveis",responsaveisRouter)

app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app