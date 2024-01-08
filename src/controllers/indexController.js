const fs = require("fs");
const path = require("path");


const indexController = {
    home: (req,res)=>{
        res.render("index")
    },
    services: (req,res)=>{
        res.render("index")
    },
    admin: (req,res)=>{
        res.render("admin")
}
}

module.exports = indexController;