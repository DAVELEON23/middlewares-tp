const fs = require("fs")
const path = require("path")
const userLogs = path.join(__dirname , "../logs/userLogs.txt")

function logMiddleware (req,res,next){
const rutaIngresada = req.url ;
const registro = "El usuario ingresó a la ruta: ´"+rutaIngresada+"´ +++ ";
fs.appendFileSync(userLogs,registro);
console.log(registro);
next()
}

module.exports = logMiddleware