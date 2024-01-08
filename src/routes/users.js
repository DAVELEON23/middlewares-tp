const userController = require ("../controllers/userController")
const express = require("express");
const router = express.Router();
const userCheck = require("../middlewares/userCheck")
router.get("/admin",userController.admin);
router.post("/admin",userCheck)

module.exports = router;
