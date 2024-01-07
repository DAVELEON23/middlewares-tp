const fs = require ("fs");

function login (req,res,next) {
    fs.readFileSync("userLogs.txt", "Ingresaste a la pagina" + req.url+'\n') //para dejar registro en el archivo txt
    next();
}

module.exports = login 