//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelAgenda = require('../models/ModelAgenda');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE AGENDAMENTOS

//Rota de cadastro
router.post('/cadastrarAgendamento', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {Data} = req.body;

    //Crie estes campos...
    modelAgenda.create(
        {Data}
    ).then(
        //...e então, caso dê certo, retorne este objeto JSON com o status HTTP...
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Agendamento cadastrado com sucesso!"
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
            mensagemStatus: "Erro ao cadastrar agendamento",
            erroObject: erro
        })
       }
    )
});

//Rota de listagem
router.get('/listagemAgendamentos', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelAgenda.findAll()
    .then(
        /*
        *...e então, caso dê certo, envie este arquivo JSON 
        *com o status HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Agendamentos listados com sucesso!',
                data: response
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
                mensagemStatus: 'Erro ao listar os Agendamentos',
                erroObject: erro
            })
        }
    )
});

//Rota de Alteração
router.put('/alterarAgendamento', (req, res) =>{

    let {Data} = req.body;

    modelAgenda.update(
        {Data},
        {where:{ID_ServicoAgendado}}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Agendamento alterado com sucesso!'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao alterar Agendamento',
                errorObject:error
            })
        }
    )

})

//Rota de Exclusão
router.delete('/excluirAgendamento:ID_ServicoAgendado', (req, res)=>{

    console.log(req.params);

    let {ID_ServicoAgendado} = req.params;

    modelAgenda.destroy(
        {where:{ID_ServicoAgendado}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Agendamento excluido'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao excluir Agendamento',
                errorObject:error
            })
        }
    )
})

//FIM DAS ROTAS DE CRUD TABELA DE AGENDAMENTOS

//Exportação das rotas
module.exports = router;