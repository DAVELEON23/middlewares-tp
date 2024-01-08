
const fs = require("fs");


let userController = {
    admin: (req,res)=>{
        res.render("../views/admin.ejs")
    }
}

module.exports = userController;