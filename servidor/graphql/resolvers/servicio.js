const Servicio = require('../../models/servicios');

const resolver = {

    createServicio: async(args) => {
        try {
            const servicio = new Servicio({
                Title:  args.createServicioInput.Title,
                Description:  args.createServicioInput.Description,
                fechaCreacion:  new Date()
            });     
            const result = await servicio.save();
            return {...result._doc};            
        } catch (err) {
            throw err;
        }
    }
}

module.exports.resolver = resolver;