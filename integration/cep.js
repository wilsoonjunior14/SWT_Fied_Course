const fetch = require('cross-fetch');

var cep = {

    searchCep: async (cep) => {
        if (cep === ""){
            return {};
        }

        const response = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        return await response.json();
    }

}

module.exports = cep;