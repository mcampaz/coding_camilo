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
    }
}

module.exports.resolver = resolver;