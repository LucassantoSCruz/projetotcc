//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelPerfisFavoritos = require('../models/ModelPerfisFavoritos');
const modelProfissionais = require('../models/ModelProfissionais')
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE AVALIAÇÕES

//Rota de cadastro
router.post('/cadastrarPerfilFavorito', (req, res) => {
    console.log(req.body);

    let { FK_Profissionais_Clientes, FK_Clientes_Profissionais } = req.body;

    modelPerfisFavoritos.create(
        { FK_Profissionais_Clientes, FK_Clientes_Profissionais }
    ).then(
        () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Favoritado com sucesso!"
            })
        }
    ).catch(
        (erro) => {
            return res.status(201).json({
                erroStatus: true,
                mensagemStatus: "Erro ao favoritar",
                erroObject: erro
            })
        }
    )
});

//Rota de listagem
router.get('/listarPerfisFavoritos', (req, res) => {

    modelPerfisFavoritos.findAll()
        .then(
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: 'Perfis favoritos listados com sucesso!',
                    data: response
                })
            }
        ).catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: 'Erro ao listar perfis favoritos',
                    erroObject: erro
                })
            }
        )
});

//Rota de listagem por FK
router.get('/listarPerfisFavoritos/:FK_Clientes_Profissionais', (req, res) => {

    let { FK_Clientes_Profissionais } = req.params;

    modelPerfisFavoritos.findAll(
        {
            where: {
                FK_Clientes_Profissionais: FK_Clientes_Profissionais
            },
            include: [{
              model: modelProfissionais
            }]
          }
    )
        .then(
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Perfis favoritos listados com sucesso!",
                    data: response
                })
            }
        )
        .catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: "Erro ao listar perfis favoritos",
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

    modelPerfisFavoritos.destroy(
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