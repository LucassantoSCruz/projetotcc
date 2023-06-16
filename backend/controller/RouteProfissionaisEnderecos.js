//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelProfissionaisEnderecos = require('../models/ModelProfissionaisEnderecos')
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE AVALIAÇÕES

//Rota de cadastro
router.post('/cadastrarEnderecoProfissional', (req, res) => {
    console.log(req.body);

    let { FK_Profissionais_Enderecos, FK_Enderecos_Profissionais } = req.body;

    modelProfissionaisEnderecos.create(
        { FK_Profissionais_Enderecos, FK_Enderecos_Profissionais }
    ).then(
        () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Endereço cadastrado com sucesso!"
            })
        }
    ).catch(
        (erro) => {
            return res.status(201).json({
                erroStatus: true,
                mensagemStatus: "Erro ao cadastrar endereço",
                erroObject: erro
            })
        }
    )
});

//Rota de listagem
router.get('/listarEnderecoProfissional', (req, res) => {

    modelProfissionaisEnderecos.findAll()
        .then(
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: 'Endereços listados com sucesso!',
                    data: response
                })
            }
        ).catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: 'Erro ao listar endereços',
                    erroObject: erro
                })
            }
        )
});

//Rota de listagem por FK
router.get('/listarEnderecoProfissionalFK/:FK_Enderecos_Profissionais', (req, res) => {

    let { FK_Enderecos_Profissionais } = req.params;

    modelProfissionaisEnderecos.findAll({
        where: {
            FK_Enderecos_Profissionais: FK_Enderecos_Profissionais
        }
    })
        .then(
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Endereços listados com sucesso!",
                    data: response
                })
            }
        )
        .catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: "Erro ao listar endereços",
                    erroObject: erro
                });
            }
        )
});



//Rota de Exclusão
//NÃO TERMINADO!!!
router.delete('/excluirAvaliacao:ID_Avaliacao', (req, res) => {

    console.log(req.params);

    let { ID_Avaliacao } = req.params;

    modelProfissionaisEnderecos.destroy(
        { where: { ID_Avaliacao } }
    ).then(
        () => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Excluido'
            })
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao excluir',
                errorObject: error
            })
        }
    )
})

//FIM DAS ROTAS DE CRUD TABELA DE AVALIAÇÕES

//Exportação das rotas
module.exports = router;