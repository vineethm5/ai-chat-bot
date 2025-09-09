const ollama = require("ollama");

const ollamaContent = async(message)=>{

    const response = await ollama.chat({
        model : "llama2",
        messages:[{role:"user",content:message}]
    });

    return response.message.content;
};


module.exports = {ollamaContent};