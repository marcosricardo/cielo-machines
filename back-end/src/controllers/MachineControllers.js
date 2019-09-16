const mongoose = require("mongoose");
const Machine = mongoose.model("Machine");

module.exports = {
  async index(request, response) {
    const machines = await Machine.find();
    return response.json(machines);
  },
  async store(request, response) {
    const machine = await Machine.create(request.body);
    return response.json(machine);
  },

  async show(request, response) {
    const machine = await Machine.findById(request.params.id);
    return response.json(machine);
  },

  async update(request, response) {
    const machine = await Machine.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true
      }
    );

    return response.json(machine);
  },

  async destroy(request, response) {
    await Machine.findByIdAndRemove(request.params.id);
    response.send();
  }
};
