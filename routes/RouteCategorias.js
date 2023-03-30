
//Importação do Express, do modelo e do Router do Express
const express = require('express');
const modelCategorias = require('../models/ModelCategorias');
const router = express.Router();



//Rota de cadastro
router.post('/cadastrarCategoria', (req, res) => {
    console.log(req.body);

    let {IDServico, preco, descricao, titulo, duracao} = req.body;

   
    modelCategorias.create(
        {IDServico, preco, descricao, titulo, duracao}
    ).then(
        
       () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: 'Serviço cadastrado com sucesso!'
            })
       }
    ).catch(
     
       (erro) => {
            return res.status(201).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao cadastrar serviço',
                erroObject: erro
            })
       }
    )
});

//Rota de listagem
router.get('/listarCategorias', (req, res) => {

    
    modelCategorias.finAll()
    .then(
        
       (response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: 'Serviços listados com sucesso!',
            data: response
        })
       }
    ).catch(
       
       (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os clientes',
                erroObject: erro
            })
       }
    )
});

//Rota de alteração

//Rota de Exclusão



//Exportação
module.exports = router;