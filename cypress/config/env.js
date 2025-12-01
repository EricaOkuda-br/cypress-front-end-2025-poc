const dotenv = require('dotenv');
const path = require('path');


const ambiente = process.env.AMBIENTE || 'hml';
const nomeArquivo = `../../env.${ambiente}`;
const caminhoCompleto = path.resolve(__dirname, nomeArquivo);
dotenv.config({ path: caminhoCompleto });

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    USUARIO: process.env.USUARIO || 'standard_user', 
    SENHA: process.env.SENHA || 'secret_sauce',
    BROWSER: process.env.BROWSER || 'chrome',
  },
};