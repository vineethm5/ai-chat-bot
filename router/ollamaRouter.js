const express = require('express');
const router = express.Router();
const {ollam_perfortm}= require("../controllers/ollamaController");

router.get("/",ollam_perfortm);

module.exports=router;
