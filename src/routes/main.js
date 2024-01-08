const express = require('express');
const router = express.Router();
const {home,services} = require("../controllers/indexController")

router.get('/', home);
router.get("/services/design",services)
module.exports = router;