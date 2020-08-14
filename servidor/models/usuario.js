const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SquemaUser= new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Rol: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('User', SquemaUser);