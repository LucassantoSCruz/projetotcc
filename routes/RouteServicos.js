
const express = require('express');
const modelServicos = require('../models/ModelServicos');
const router = express.Router();

//Rota de cadastro
router.post('/cadastrarServico', (req, res) => {
    console.log(req.body);

     let {IDServico, preco, descricao, titulo, duracao} = req.body;

   
    modelServicos.create(
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
router.get('/listarServicos', (req, res) => {

    modelServicos.finAll()
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

router.put('/alterarServicos', (req, res) =>{

    let { IDServico, preco, descricao, titulo, duracao } = req.body;

    modelServicos.update(
        { preco, descricao, titulo, duracao},
        {where:{  IDServico }}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Cliente alterado com sucesso!'
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
router.delete('/excluirServicos:IDServico', (req, res)=>{

    console.log(req.params);

    let {IDServico} = req.params;

    modelServicos.destroy(
        {where:{IDServico}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Serviço excluido'
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


//Exportação
module.exports = router;