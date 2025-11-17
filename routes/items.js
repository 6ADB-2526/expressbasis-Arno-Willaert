const express = require("express")
const crlItems = require("../controllers/items")

const routes = express.Router()

routes.get("/", crlItems.welkom)
routes.get("/returnItem", crlItems.returnItem)

module.exports = routes