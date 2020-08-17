const User = require('../../models/usuario');
const jwt = require('jsonwebtoken');

const resolver = {

    login: async(args) => {
        try {
            const user = await User.findOne({Username: args.loginInput.Username});
            if(!user){
                throw new Error("User does not exist.");
            } else {
                if(user.Password === args.loginInput.Password){
                    const data = {
                        UserID: user.id,
                        Username: user.Username,
                        Rol: user.Rol
                    };
                    const token = jwt.sign(data, 'privateKey', {
                        expiresIn: '1h'
                    });
                    return { 
                        UserID: user.id, 
                        Username: user.Username, 
                        Rol: user.Rol, 
                        Token: token,
                        TokenSpiration: 1
                    };
                } else {
                    throw new Error('Password is incorrect.');
                }
            }
        }catch (err) {
            throw err;
        }
    },

    register: async(args) => {
        try {
            const username = await User.findOne({Username: args.registerInput.Username});
            if(username){
                throw new Error('Already username exist');
            } else {
                const usuario = new User({
                    Username: args.registerInput.Username,
                    Password: args.registerInput.Password,
                    FirstName: args.registerInput.FirstName,
                    LastName: args.registerInput.LastName,
                    Rol: "Cliente",
                    fechaCreacion: new Date()
                });     
                const result = await usuario.save();
                return {...result._doc};
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports.resolver = resolver;