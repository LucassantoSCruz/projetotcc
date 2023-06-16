const NodeGeocoder = require('node-geocoder');
const app = express()

const opcao = {
    provider: 'google',
    apiKey: 'ADD A CHAVE DA APPI KEY DO GOOGLE',
};

const geocoder = NodeGeocoder(opcao);

//rota que pega as info do React
geocoder.geocode('http://localhost:3000/endereco/:cep')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

//pegar a foto do usuario para aparecer no mapa como se fosse o marcador


