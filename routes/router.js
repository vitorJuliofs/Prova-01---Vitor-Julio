const express = require("express")
const controller = require("../controllers/clientecontrollers")

const rotas = express.Router()

rotas.get("/",controller.getAll)
rotas.get("/:id",controller.getbyID)
rotas.post("/",controller.create)
rotas.put("/:id",controller.update)
rotas.delete("/:id",controller.delete)

module.exports = rotas