const express = require("express")
const routeItem = require("./routes/items")
const crlAdmin = require("./routes/admin")

const app = express()
app.use(express.json())
app.use('/items', routeItem)
app.use('/Admin', crlAdmin)

app.listen(3000, () => console.log("server gestart op poort 3000"))