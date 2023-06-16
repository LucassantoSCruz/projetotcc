const express = require('express');
const modelStatus = require('../models/ModelStatus');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE CATEGORIAS

//Rota de cadastro
router.post('/cadastrarStatus', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {Nome} = req.body;

    //Crie estes campos...
    modelStatus.create(
        {Nome}
    ).then(
        //...e então, caso dê certo, retorne este objeto JSON com o status HTTP...
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Cadastrado com sucesso!"
            })
        }
    ).catch(
        /*
        * ...caso "pegue" um erro, envie este arquivo JSON com o status HTTP e
        * o objeto de erro
        */
       (erro) => {
        return res.status(201).json({
            erroStatus: true,
            mensagemStatus: "Erro ao cadastrar",
            erroObject: erro
        })
       }
    )
});

//Rota de listagem
router.get('/listarStatus', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelStatus.findAll()
    .then(
        /*
        *...e então, caso dê certo, envie este arquivo JSON 
        *com o status HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Listados com sucesso!',
                Nome: response
            })        
        }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne este objeto JSON com o 
        *status HTTP e o objeto de erro
        */
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar',
                erroObject: erro
            })
        }
    )
});

//Rota de Alteração
router.put('/alterarStatus', (req, res) =>{

    let {ID_Status, Nome} = req.body;

    modelStatus.update(
        {ID_Status, Nome},
        {where:{ID_Status}}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Alterado com sucesso!'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao alterar',
                errorObject:error
            })
        }
    )

})

//Rota de Exclusão
router.delete('/excluirStatus:ID_Status', (req, res)=>{

    console.log(req.params);

    let {ID_Status} = req.params;

    modelStatus.destroy(
        {where:{ID_Status}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Excluido'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao excluir',
                errorObject:error
            })
        }
    )
})

//FIM DAS ROTAS DE CRUD TABELA DE CATEGORIAS

//Exportação das rotas
module.exports = router;