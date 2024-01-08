
const usuarioAutorizado =["Ada","Greta","Vin","Tim"];

function userCheck (req,res,next)  {
const user = req.body.user.trim();

if (usuarioAutorizado.includes(user)) {
    res.send (`Bienvenid@ ${user}`)  
    next();
}else{ 
    res.send("No tienes los privilegios para ingresar")
}
} 

module.exports = userCheck