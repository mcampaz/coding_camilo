const usuario = require('./usuario');
const auth = require('./auth');
const servicio = require('./servicio');

const root = {
    ...usuario.resolver,
    ...auth.resolver,
    ...servicio.resolver
}

module.exports.root = root;