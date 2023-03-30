const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router()

//modelo Pessoa Juridica
const PJ = require('../models/ModelProfissionais');

//rota de login
router.post('/loginPJ', async (req, res)=>{
    const { email, senha } = req.body;

    try{
        //verificação de email
        const pj = await PJ.findOne({ email });

        if (!pj) {
            return res.status(400).json({ message: 'Usuário não encontrado'});
        }

        //verifica se a senha está == ao do bd
        const consulta = await bcrypt.compare(senha, pj.senha);

        if(!consulta){
            return res.status(400).json({message: 'Senha incorreta'});
        }

        //cria um token com informações do user
        const token = jwt.sign({senha: pj.senha, email: pj.email, type:'PJ'}, process.env.JWT_SECRET)

        //resposta do token
        res.json({token});
        }catch (error){
            console.error(error);
            res.status(500).json({message: 'Erro ao realizar login'});
        }
    });


const PF = require('../models/ModelClientes');

    //rota de login
    router.post('/loginPF', async (req, res)=>{
        const { email, senha } = req.body;
    
        try{
            //verificação de email
            const pf = await PF.findOne({ email });
    
            if (!pf) {
                return res.status(400).json({ message: 'Usuário não encontrado'});
            }
    
            //verifica se a senha está == ao do bd
            const consulta1 = await bcrypt.compare(senha, pf.senha);
    
            if(!consulta1){
                return res.status(400).json({message: 'Senha incorreta'});
            }
    
            //cria um token com informações do user
            const token = jwt.sign({senha: pf.senha, email: pf.email, type:'PJ'}, process.env.JWT_SECRET)
    
            //resposta do token
            res.json({token});
            }catch (error){
                console.error(error);
                res.status(500).json({message: 'Erro ao realizar login'});
            }
        });


module.exports = router;



