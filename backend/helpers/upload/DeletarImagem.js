const fs = require('fs');

const deletarImagem = (imagem) => {
    fs.unlink(imagem, (error) => {
        if(error){
            console.log('Erro ao excluir imagem: ' + error);
        }
        else {
        console.log('Imagem excluída com sucesso!');
        }
    });
};

module.exports = deletarImagem;