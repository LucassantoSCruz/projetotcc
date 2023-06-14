const express = require('express');
const modelEnderecos = require('../models/ModelEnderecos');
const modelProfissionais = require('../models/ModelProfissionais')
const router = express.Router();
const opencage = require('opencage-api-client');


router.get('/buscarCoordenadas', (req, res) => {

    const endereco = req.query.endereco;

    opencage
    .geocode({ q: endereco })
    .then((response) => {
        if (response.status.code === 200 && response.results.length > 0) {
            const place = response.results[0];
            console.log(place.formatted);
            console.log(place.geometry);
            console.log(place.annotations.timezone.name);

            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Listados com sucesso!',
                data: response
            })
        } else {
            console.log('Status', response.status.message);
            console.log('total_results', response.total_results);
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Listados com sucesso!',
                data: 'Nenhum dado encontrado'
            })
        }
    })
    .catch((error) => {
        console.log('Error', error.message);
        if (error.status.code === 402) {
            console.log('hit free trial daily limit');
        }
        return res.status(201).json({
            erroStatus: true,
            mensagemStatus: "Erro ao cadastrar",
            erroObject: error
        })
    });
})


//Rota de cadastro
router.post('/cadastrarEndereco', (req, res) => {
    console.log(req.body);

    let { latitude, longitude, cep, uf, localidadeCidade, logradouro, bairro, numero, complemento } = req.body;

    modelEnderecos.create(
        { latitude, longitude, cep, uf, localidadeCidade, logradouro, bairro, numero, complemento }
    ).then(
        (registro) => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Cadastrado com sucesso!",
                ID_Endereco: registro.ID
            })
        }
    ).catch(
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
router.get('/listarEndereco', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelEnderecos.findAll({include: modelProfissionais})
        .then(
            /*
            *...e então, caso dê certo, envie este arquivo JSON 
            *com o status HTTP e a listagem...
            */
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: 'Listados com sucesso!',
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
                    mensagemStatus: 'Erro ao listar',
                    erroObject: erro
                })
            }
        )
});

router.get('/ListarEnderecoID/:ID', (req, res) => {

    let { ID } = req.params;

    modelEnderecos.findByPk(ID)
        .then(
            (response) => {
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: "Endereço listado com sucesso!",
                    data: response
                })
            }
        )
        .catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus: "Erro ao listar Endereço!",
                    erroObject: erro
                });
            }
        )
});

//Rota de Alteração
router.put('/alterarEndereco', (req, res) => {

    let { latitude, longitude, cep, uf, localidadeCidade, logradouro, bairro, numero, complemento } = req.body;

    modelEnderecos.update(
        { latitude, longitude, cep, uf, localidadeCidade, logradouro, bairro, numero, complemento },
        { where: { ID_Endereco } }

    ).then(
        () => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Alterado com sucesso!'
            })
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao alterar',
                errorObject: error
            })
        }
    )

})

//Rota de Exclusão
router.delete('/excluirEndereco:ID_Endereco', (req, res) => {

    console.log(req.params);

    let { ID_Endereco } = req.params;

    modelEnderecos.destroy(
        { where: { ID_Endereco } }
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

//FIM DAS ROTAS DE CRUD TABELA DE ENDEREÇOS

//Exportação das rotas
module.exports = router;