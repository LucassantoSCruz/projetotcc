const express = require('express');
const modelClientes = require('../models/ModelClientes');
const router = express.Router();

    router.post('/CadastroDadosF', (req, res) => {
            
        let{cpf, nome, sobrenome, email, senha, cep} = req.body;

        modelClientes.create({cpf, nome, sobrenome, email, senha, cep})
            .then(
                ()=>{
                    return res.status(201).json({
                        erroStatus: false,
                        mensagemStatus: "DADOS INSERIDOS COM SUCESSO"
                    })
                }
            ).catch(
                (error) => {
                    return res.status(400).json({
                        erroStatus: true,
                        mensagemStatus: "ERRO AO INSERIR DADOS"
                    });
                }
            )
    })


    router.get('/ListagemDados', (req, res) => {
        modelClientes.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Dados listados",
                    errorObject:response
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar dados",
                    errorObject: error
                })
            }
        )
    })

    router.get('/ListagemDadosID/:IDCliente',(req, res) => {
        let {cpf} = req.params;
        modelClientes.findByPk(cpf)
            .then(
                (response) => {
                    return res.staus(200).json({
                        erroStatus:false,
                        mensagemStatus:'Dados listados por ID',
                        data: response
                    })
                }
            ).catch(
                (error) => {
                    return res.status(400).json({
                        erroStatus:true,
                        mensagemStatus: "Erro ao listar dados por ID",
                        errorObject: error
                })
            }
        )
    }) 
    
    router.put('/AtualizarDados/:IDCliente',(req, res) => {
        let{nome, sobrenome, email, senha, cep} = req.body;
        let{ cpf} =req.params;
        modelClientes.update(
            {nome, sobrenome, email, senha, cep},
            {where:{ cpf, }}
        ).then(
            ()=>{
                return res.staus(200).json({
                    erroStatus:false,
                    mensagemStatus:"Dados atualizados!"
                })
            }
        ).catch(
            (error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus: "Erro ao listar dados por ID",
                    errorObject: error
                });
            }
        )
    })

    router.delete('/DeletarDados/:IDCliente',(req, res) => {
        let{cpf} = req.params;
        modelClientes.findByPk(cpf)
            .then((clientes) => {
                if(clientes){
                    modelClientes.destroy({where:{cpf}})
                    .then(()=>{
                        return res.status(200).json({
                            erroStatus:false,
                            mensagemStatus:"Dados excluidos"
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
            }).catch((error) => {
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"Erro ao encontrar dados",
                    errorObject:error
                })
            })
    })                    


//Exportação das rotas
module.exports = router;