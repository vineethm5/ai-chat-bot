const {ollamaContent} = require("../config/ollama");
const asyncHandler = require("express-async-handler");

const ollam_perfortm = asyncHandler(async(req,res)=>{
    const requestt= req.body;
    const reply = await ollamaContent(requestt);    
    res.status(200).json({reply});
});

module.exports = {ollam_perfortm};