require("dotenv").config();

const express = require("express");
const app=express();
const port = process.env.PORT || 5000
 

app.use(express.json());
app.use("/",require("./router/ollamaRouter"));


app.listen(port,(err)=>{
    if(!err)
    {
        console.log(`Server connected to the server ${port}`)
    }
})

