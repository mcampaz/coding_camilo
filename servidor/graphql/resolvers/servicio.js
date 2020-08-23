const Servicio = require("../../models/servicios");

const resolver = {
  servicios: async () => {
    try {
      const servicios = await Servicio.find();
      return servicios.map((serv) => {
        return {
          ...serv._doc,
          fechaCreacion: new Date(serv._doc.fechaCreacion).toISOString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  createServicio: async (args) => {
    try {
      const servicio = new Servicio({
        Title: args.createServicioInput.Title,
        Description: args.createServicioInput.Description,
        fechaCreacion: new Date(),
      });
      const result = await servicio.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  updateServicio: async (args) => {
    try {
      let bool = false;
      const servicio = await Servicio.findByIdAndUpdate(
        { _id: args.updateServicioInput._id },
        {
          $set: {
            Title: args.updateServicioInput.Title,
            Description: args.updateServicioInput.Description,
            updateDate: new Date(),
          },
        }
      );
      if (!servicio) {
        throw new Error("Error al actualizar servicio");
      } else {
        bool = true;
      }
      return true;
    } catch (err) {
      throw err;
    }
  },
};

module.exports.resolver = resolver;
