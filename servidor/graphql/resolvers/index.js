const usuario = require('./usuario');

const root = {
    ...usuario.resolver
}

module.exports.root = root;