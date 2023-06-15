//INFORMAÇÕES DO BANCO REMOTO:
const conexao = new sequelize(

    //Nome do banco de dados
    'bd_belezura',

    //Usuário
    'belezura_administrador',

    //Senha
    'Cl7Ys6^4Q1R_',

    {
        host: 'bd-belezura.mysql.database.azure.com',
        dialect: 'mysql',
        port: '3306'
    }
);