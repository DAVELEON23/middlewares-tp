const fs = require ("fs");

function login (req,res,next) {
    fs.readFileSync("userLogs.txt", "Ingresaste a la pagina" + req.url) //para dejar registro en el archivo txt
}

module.exports = login 