const express = require('express');
const modelClientes = require('../models/ModelClientes');

const clientesController = {

    createCliente: (req, res) => {
        let{cpf, nome, email, senha, cep} = req.body
        modelClientes.create({cpf, nome, email, senha, cep})
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
    },
    getCliente: (req, res) => {
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
    },
    getClienteID:(req, res) => {
        let {IDCliente} = req.params;
        modelClientes.findByPk(IDCliente)
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
    },
    putCliente:(req, res) => {
        let{ nome, email, senha} = req.body;
        let{IDCliente} =req.params;
        modelClientes.update(
            { nome, email, senha},
            {where:{IDCliente}}
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
    },
    destroyCliente:(req, res) => {
        let{IDCliente} = req.params;
        modelClientes.findByPk(IDCliente)
            .then((clientes) => {
                if(clientes){
                    modelClientes.destroy({where:{IDCliente}})
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
    }                    
}

//Exportação das rotas
module.exports = clientesController;