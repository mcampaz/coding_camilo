const usuario = require('./usuario');
const auth = require('./auth');

const root = {
    ...usuario.resolver,
    ...auth.resolver
}

module.exports.root = root;