const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SquemaServicios = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    updateDate: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Servicios', SquemaServicios);