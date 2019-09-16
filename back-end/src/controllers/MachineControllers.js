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

  async showGraphic(request, response) {
    let month = 1;
    let data = [];
    while (month <= 12) {
      let monthResult = await Machine.aggregate([
        { $project: { name: 1, month: { $month: "$createdAt" } } },
        { $match: { month: month } }
      ]);

      data.push(monthResult.length);

      month++;
    }

    const graphic = data;

    return response.json(graphic);
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
