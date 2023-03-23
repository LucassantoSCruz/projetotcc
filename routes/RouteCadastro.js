const express = require('express');
const cep = require('cep-promise') //npm install cep-promise


const app = express();




























/*/api do cep 
app.get('http://localhost:3000/endereco/:cep', async(req, res) => {

    const { cep } = req.params;
    try{
        const result = await cep(cep);
        req.json(result);
    } catch(error){
        res.status(400).json({ error: 'CEP INVÁLIDO'})
    }
});

app.get()
*/
