const express = require('express');
const modelClientes = require('../models/ModelClientes');
const router = express.Router();

router.post('/cadastrarCliente', (req, res) => {
            
    let{CPF, Nome, Email, Senha, Telefone, Pronomes} = req.body;

    modelClientes.create({CPF, Nome, Email, Senha, Telefone, Pronomes})
        .then(
            ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    mensagemStatus: "Cadastrado com sucesso!"
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: "Erro ao cadastrar"
                });
            }
        )
})


router.get('/listarClientes', (req, res) => {
        modelClientes.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Listados com sucesso",
                    errorObject:response
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar",
                    errorObject: error
                })
            }
        )
})

//Rota de listagem por e-mail
router.get('/ListarClientesEmail/:Email/:Senha', (req, res)=>{

    let {Email, Senha} = req.params;
    console.log(JSON.stringify(Email))
    console.log(JSON.stringify(Senha))

    modelClientes.findOne({
        attributes:['Email', 'Senha'],
        where:{Email, Senha}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Cliente listado com sucesso!",
                data:response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Cliente!",
                erroObject:erro
            });
        }
    )
});
    
router.put('/alterarCliente/:CPF',(req, res) => {

        let{CPF, Nome, Email, Senha, Telefone, Pronomes} = req.body;
        
        modelClientes.update(
            {CPF, Nome, Email, Senha, Telefone, Pronomes},
            {where:{CPF}}
        ).then(
            ()=>{
                return res.staus(200).json({
                    erroStatus:false,
                    mensagemStatus:"Alterado com sucesso!"
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao alterar",
                    errorObject: error
                });
            }
        )
})

router.delete('/excluirCliente/:CPF',(req, res) => {
        let{CPF} = req.params;
        modelClientes.findByPk(CPF)
            .then((clientes) => {
                if(clientes){
                    modelClientes.destroy({where:{CPF}})
                    .then(()=>{
                        return res.status(200).json({
                            erroStatus:false,
                            mensagemStatus:"Excluido"
                        })
                    }).catch(
                        (error)=>{
                            return res.status(400).json({
                                erroStatus:true,
                                mensagemStatus:"Erro ao excluir dados",
                                errorObject:error
                            });
                        })} 
                        else{
                            return res.status(404).json({
                                erroStatus:true,
                                mensagemStatus:"Erro ao excluir dados"
                            })
                        }
            })
            .catch((error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"Erro ao encontrar dados",
                    errorObject:error
                })
            })
})                    


//Exportação das rotas
module.exports = router;