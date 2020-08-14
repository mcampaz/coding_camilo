const User = require('../../models/usuario');


const resolver = {
    usuarios: async() => {
        try {
            const usuarios = await User.find();
            return usuarios.map(user => {
                return {
                    ...user._doc
                }
            })
        } catch (err) {
            throw err;
        }
        
    },

    registrarUser: async(args) => {
        try {

            const usuario = new User({
                Username: args.userInput.Username,
                Password: args.userInput.Password,
                FirstName: args.userInput.FirstName,
                LastName: args.userInput.LastName,
                Rol: args.userInput.Rol,
                fechaCreacion: new Date()
            })
            
            const result = await usuario.save();
            return {...result._doc};

        } catch (err) {
            throw err;
        }
    }
}

module.exports.resolver = resolver;